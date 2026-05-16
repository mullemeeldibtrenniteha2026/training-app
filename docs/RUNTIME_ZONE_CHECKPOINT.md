# Runtime Zone Checkpoint

## Current Architecture Maturity

Current architecture maturity estimate:

- **6.5 / 10**

Why:

- readonly render boundaries are now meaningfully extracted
- runtime ownership is still understandable
- protected zones have remained stable
- event logic, focus restore, timer runtime, and finish flow still live in one runtime layer

This is a healthy checkpoint for continued hardening, but not yet a deep runtime-refactor point.

## Runtime Zones Still Owned by `index.html`

The following runtime zones still correctly belong to `index.html`:

### 1. Render orchestration

Main owner:

- `renderExercises()`

Responsibilities:

- exercise/day selection
- search filtering
- workout mode branching
- empty-state branching
- active group orchestration
- final render mount
- post-render wiring

### 2. Event runtime

Main owner:

- `bindExerciseEvents()`

Responsibilities:

- set field behavior
- done toggle
- delete set
- add set
- delete exercise
- recovery/block toggle
- text-field updates
- search jump
- workout prev/next

### 3. Focus / viewport restore runtime

Main owners:

- `queueExerciseViewportRestore()`
- `restoreExerciseViewportContext()`
- `queueWorkoutFieldFocus()`
- `restoreWorkoutFieldFocus()`

Responsibilities:

- rerender continuity
- scroll stability
- focused field continuity
- post-add-set focus targeting

### 4. Timer runtime

Main owner:

- timer subsystem around `timerState`

Responsibilities:

- start / pause / reset / open / close
- button label updates
- wake lock integration
- timer overlay lifecycle

### 5. Finish workout runtime

Main owners:

- `markEntireWorkoutDone()`
- `finishWorkoutNow()`
- finish summary overlay handlers

Responsibilities:

- mark remaining sets done
- exit workout mode
- dismiss timer
- open summary overlay

### 6. Workout mode orchestration

Main owner:

- `renderExercises()`

Responsibilities:

- active block selection
- progress state
- prev/next movement
- workout-mode-only body routing

## Render Boundary Status

Readonly render boundaries are in good shape.

Current extracted areas include:

- workout header/progress/action/body renderers
- search result renderers
- search result input adapter
- premium and plain empty-state renderers
- empty-state input adapters
- group header renderer
- group composer renderer
- exercise header/meta renderer
- compare/details/actions input adapters
- shell input adapter
- single/superset/normal card shell renderers
- set row renderer
- sets container renderer

Status:

- healthy
- consistent
- suitable as current render-boundary checkpoint

## Event Runtime Contract Status

Event runtime is documented and still protected.

Reference:

- `/Users/timoanis/Documents/GitHub/training-app/docs/BIND_EXERCISE_EVENTS_CONTRACT.md`

Status:

- documented
- high coupling remains
- not yet safe for structural split

Main reason:

- depends on exact DOM hook contract
- depends on exact row/card hierarchy
- mixes draft-save, input sanitation, deletion, done-state, and navigation concerns

## Focus / Viewport Runtime Contract Status

Focus/viewport restore runtime is now documented.

Reference:

- `/Users/timoanis/Documents/GitHub/training-app/docs/FOCUS_VIEWPORT_RUNTIME_CONTRACT.md`

Status:

- documented
- timing-sensitive
- must remain protected for now

Main reason:

- tied to rerender timing
- tied to mobile editing flow
- depends on exact hook contracts
- depends on `requestAnimationFrame(...)` restore ordering

## Timer Runtime Status

Timer runtime is still centralized in `index.html`.

Status:

- behaviorally stable
- architecturally still monolithic
- not yet ready for deeper refactor

Why:

- state + overlay + button updates + wake lock are still tightly coupled
- timer interacts with workout mode but remains its own runtime island

Current recommendation:

- leave untouched until event/focus/runtime boundaries are more mature

## Finish Workout Flow Status

Finish workout flow remains stable and protected.

Status:

- stable
- tightly coupled to workout completion behavior
- not yet safe for structural refactor

Why:

- touches done-state integrity
- touches timer dismissal
- touches mode exit
- touches finish summary overlay

Current recommendation:

- keep unchanged until later architecture-hardening phase

## Workout Mode Orchestration Status

Workout mode runtime is partially boundary-extracted but still correctly owned by `renderExercises()`.

Status:

- render markup boundaries extracted
- runtime orchestration intentionally still inline
- safe for continued readonly extraction
- not yet safe for deep runtime split

Protected points:

- active group selection
- progress pill state computation
- active block label
- workout-mode-only routing

## Protected / No-Touch Zones

Do not casually refactor:

- `bindExerciseEvents()`
- `applySetRowGuidance()`
- `queueExerciseViewportRestore()`
- `restoreExerciseViewportContext()`
- `queueWorkoutFieldFocus()`
- `restoreWorkoutFieldFocus()`
- timer runtime
- `finishWorkoutNow()`
- active-group orchestration in `renderExercises()`
- rest-field split runtime behavior
- search jump runtime behavior

These remain protected until stronger runtime separation is in place.

## Safe Next Steps Before Touching Runtime

The safest next steps are still non-runtime-facing:

1. Continue tiny readonly adapter/composer extractions only where they are obviously pure
2. Continue documentation checkpoints after each small phase
3. Audit fallback cluster readiness before any fallback consolidation
4. Create a small runtime dependency map for timer + workout finish + mode interaction
5. Keep validating that helpers remain readonly and runtime ownership stays centralized

These steps improve clarity without increasing behavior risk.

## Criteria For When `bindExerciseEvents()` Can Be Split

It becomes reasonable to split `bindExerciseEvents()` only when all of the following are true:

1. Render-boundary checkpoint remains stable after several more readonly iterations
2. DOM hook inventory exists and is current
3. Event binding contract is documented and verified
4. Focus/viewport contract is documented and verified
5. Rest-field special handling is explicitly isolated on paper first
6. Manual QA coverage exists for:
   - kg/reps input
   - comma decimal behavior
   - set advance
   - done toggle
   - delete set hold gesture
   - search jump
   - workout prev/next
   - mobile keyboard flow

Even then, first step should be:

- split into tiny internal sub-handlers inside `index.html`

Not:

- move ownership into readonly helpers
- move event ownership across files immediately

## Criteria For When Timer / Focus / Finish Can Be Touched

These runtime zones should be touched only later than `bindExerciseEvents()`.

Safe prerequisites:

1. `bindExerciseEvents()` contract is stable and partially clarified internally
2. Focus/viewport restore contract has survived at least one more checkpoint cycle
3. Workout mode orchestration remains stable after more readonly cleanup
4. Manual QA exists for:
   - timer open/close/start/pause/reset
   - workout finish flow
   - set advance after rerender
   - search jump with scroll restore
   - mobile viewport behavior

Only then should:

- timer runtime
- focus/viewport restore runtime
- finish workout runtime

be considered for structural cleanup.

And even then:

- prefer internal runtime clarification before module extraction

## Checkpoint Decision

This version is safe to treat as a runtime-zone architecture checkpoint.

Reason:

- render boundaries are strong enough to pause and stabilize
- runtime ownership is still centralized and understandable
- protected zones remain intact
- contracts for event and focus systems are now documented
- no unsafe runtime split has happened prematurely

