# Workout Mode Architecture

## Purpose

This document captures the current Workout Mode runtime boundaries in the latest confirmed working version.

The goal is to make future premium UI work safer by separating:

- readonly render extraction candidates
- protected runtime ownership
- high-risk behavior coupling

This is not a rewrite plan. It is a boundary map for safe iteration.

## Current Runtime Ownership

Workout Mode is currently runtime-owned inside `index.html`.

Canonical ownership stays with:

- `state`
- `ui`
- `renderExercises()`
- `bindExerciseEvents()`
- timer runtime helpers
- finish workout helpers

Workout Mode does **not** use a separate state model.
It renders from the same active day state as the standard workout view.

Key ownership:

- `state` owns workout data, sets, reps, done states, supersets, notes, rest values, and exercise order
- `ui.workoutMode` owns whether workout mode is active
- `ui.activeExerciseIndex` owns the currently active workout block
- `renderExercises()` owns workout-mode orchestration
- `bindExerciseEvents()` owns most exercise-card DOM event wiring

## Current Extracted V2 Boundaries

These readonly boundaries are already extracted:

### 1. Workout mode header renderer

Helper:

- `/Users/timoanis/Documents/GitHub/training-app/v2/workout-mode-helpers.js`

Export:

- `window.TimoTrainingV2WorkoutMode.renderWorkoutHeader(...)`

Responsibility:

- workout focus card markup
- date display
- block title
- progress pills markup
- previous / next nav markup

Runtime ownership remains in `index.html`:

- active group selection
- active index logic
- click handlers for `data-workout-jump`
- `prevExerciseBtn`
- `nextExerciseBtn`

### 2. Workout mode action panel renderer

Helper:

- `/Users/timoanis/Documents/GitHub/training-app/v2/workout-mode-helpers.js`

Export:

- `window.TimoTrainingV2WorkoutMode.renderWorkoutActionPanel(...)`

Responsibility:

- bottom workout-mode action panel markup only
- `Finish workout`
- `⏱ Timer`
- `+ Exercise`
- `+ Set`

Runtime ownership remains in `index.html`:

- `finishWorkoutBtnInline` click behavior
- `bottomTimerBtn` click behavior
- `bottomAddExerciseBtn` click behavior
- `bottomAddSetBtn` click behavior

## Render Ownership Map

### `renderExercises()`

Primary owner of workout-mode rendering:

- filters current day exercises
- builds workout groups
- selects active group
- decides standard mode vs workout mode output
- decides empty-state vs populated-state render
- mounts markup into `#exerciseList`
- binds post-render event handlers

Important runtime split:

- standard mode renders all groups
- workout mode renders only the active group

This is the core orchestration boundary and must remain stable.

### Supporting readonly render boundaries already in use

Workout Mode also composes through these existing render helpers:

- `buildWorkoutHeaderMarkup(...)`
- `buildWorkoutContainerMarkup(...)`
- `buildExerciseShellMarkup(...)`
- `buildExerciseDetailsMarkup(...)`
- `buildExerciseCompareMarkup(...)`
- `buildExerciseActionsMarkup(...)`
- `buildSetMarkup(...)`
- `buildSetsContainerMarkup(...)`

These help reduce inline markup size, but runtime ownership still lives in `index.html`.

## Event Ownership Map

### Entry / Exit

- `#workoutModeBtn`
  - toggles `ui.workoutMode`
  - resets `ui.activeExerciseIndex` to `0`
- `#finishWorkoutBtnInline`
  - confirms finish
  - calls `finishWorkoutNow()`

### Block navigation

- `[data-workout-jump]`
  - directly sets `ui.activeExerciseIndex`
- `#prevExerciseBtn`
  - moves active block backward
- `#nextExerciseBtn`
  - moves active block forward
- `keydown ArrowLeft / ArrowRight`
  - routed through `handleWorkoutModeKeydown(...)`

### Exercise / set editing

Owned by `bindExerciseEvents()`:

- kg input
- reps input
- set toggle
- block toggle
- add set
- delete set
- delete exercise
- name/code/rest/note editing

### Bottom action panel

- `#bottomTimerBtn`
  - opens timer overlay
- `#bottomAddExerciseBtn`
  - scrolls/focuses add exercise input
- `#bottomAddSetBtn`
  - adds set for active or first suitable exercise

## Timer Subsystem Ownership

Timer is a separate runtime subsystem.

Primary owner:

- `timerState`

Key functions:

- `renderTimer()`
- `startTimer()`
- `pauseTimer()`
- `resetTimer()`
- `openTimer()`
- `closeTimer()`
- `dismissTimer()`

Important rule:

Workout Mode uses the timer, but does not own timer logic.
Future UI work may style timer entry points, but should not casually refactor timer runtime.

Timer also participates in:

- wake lock control
- overlay visibility
- button label updates
- paused/running visual state

## Focus / Viewport Subsystem Ownership

This is a protected runtime subsystem.

Primary functions:

- `captureExerciseViewportContext()`
- `queueExerciseViewportRestore()`
- `restoreExerciseViewportContext()`
- `queueWorkoutFieldFocus()`
- `restoreWorkoutFieldFocus()`

This subsystem preserves:

- inline editing continuity
- scroll stability after rerenders
- field focus restoration
- mobile-friendly editing flow

It is tightly coupled to:

- `commitStateUpdate(...)`
- `commitUiUpdate(...)`
- `renderExercises()`
- post-render requestAnimationFrame restore steps

This area is not a safe casual extraction target.

## Finish Workout Flow Ownership

Primary functions:

- `markEntireWorkoutDone()`
- `finishWorkoutNow()`
- `openFinishSummary(...)`
- `closeFinishSummary()`

Current flow:

1. User taps `Finish workout`
2. User confirms dialog
3. `finishWorkoutNow()`:
   - dismisses timer
   - computes summary stats
   - marks remaining sets / blocks done
   - exits workout mode
   - keeps runtime save behavior unchanged
4. finish summary overlay opens
5. close action shows `Workout completed`

This flow must remain stable because it touches:

- done-state integrity
- timer dismissal
- mode exit
- summary overlay

## Protected / High-Risk Zones

These areas should not be casually changed:

### 1. `bindExerciseEvents()`

High risk because it owns:

- input sanitation
- autosave timing
- mobile Enter/blur advance behavior
- done toggles
- delete gestures
- note/rest/name/code field behavior

### 2. Focus / viewport restore subsystem

High risk because small changes can break:

- mobile flow
- scroll stability
- field refocus after rerender

### 3. `finishWorkoutNow()`

High risk because it coordinates:

- done-state completion
- timer dismissal
- mode exit
- finish summary

### 4. Timer runtime

High risk because it owns:

- elapsed time state
- running/paused state
- timer overlay wiring
- wake lock lifecycle

### 5. Active-group orchestration in `renderExercises()`

High risk because it preserves:

- exercise order
- superset grouping
- active block selection
- workout-mode slice of the day view

## Safe Future Extraction Candidates

These are the safest next readonly candidates:

### Readonly render extraction

- workout-mode exercise block wrapper markup
- finish summary card markup
- workout-mode block header markup
- workout-mode progress pill row renderer
- workout-mode empty helper copy wrappers if ever needed

### Style polish safe zones

- workout header visual hierarchy
- action panel styling
- progress pill styling
- finish summary visual styling
- button emphasis
- spacing hierarchy

### UX polish safe zones

- calmer labels and supporting copy
- more intentional CTA emphasis
- subtle transitions that do not alter render timing
- visual feedback polish that reuses existing runtime hooks

## Unsafe Runtime Refactor Zones

These are **not** safe without a dedicated deeper audit:

- `bindExerciseEvents()` extraction
- timer runtime extraction
- active-group selection refactor
- focus restoration refactor
- finish workflow sequencing changes
- any change that moves exercise IDs, data hooks, or DOM timing assumptions

## Signed Boundaries: Safe vs Unsafe Work

### Safe for readonly render extraction

- markup-only helpers
- copy helpers
- button-row render helpers
- focus-card render helpers

### Safe for style polish

- CSS-only workout-mode hierarchy polish
- CTA emphasis
- spacing and typography polish
- finish summary visual polish

### Safe for lightweight UX polish

- wording refinement
- visual success feedback if existing runtime is reused
- non-structural button emphasis

### Unsafe without deeper audit

- event rebinding architecture changes
- state ownership movement
- timer ownership movement
- focus restoration changes
- finish-flow sequencing changes
- active block orchestration changes

## Manual QA Checklist

### Workout mode entry

- Enter workout mode from a populated day
- Confirm block order matches standard day view
- Confirm active block starts at the first block

### Superset integrity

- Open a day with a superset
- Confirm the superset remains grouped as one workout block
- Confirm next/previous navigation does not split the superset

### Set editing

- Edit kg and reps
- Confirm inline autosave still works
- Confirm Enter/Next flow still advances correctly

### Done-state integrity

- Mark a set as done
- Confirm next-row guidance still works
- Confirm recovery block done-state still behaves correctly

### Timer

- Open timer from workout mode
- Start, pause, reset, and close
- Confirm timer behavior is unchanged

### Finish workout

- Tap `Finish workout`
- Confirm remaining sets become done
- Confirm workout mode exits
- Confirm finish summary overlay appears

### Add actions

- Tap `+ Exercise`
- Confirm add exercise input is focused
- Tap `+ Set`
- Confirm set is added to the intended active exercise flow

### Mobile flow

- Use workout mode in a narrow/mobile viewport
- Confirm focus, keyboard flow, and scroll behavior remain stable

## Recommended Next Safe Iteration

Safest next step after this checkpoint:

- keep runtime ownership in `index.html`
- continue only with readonly render extraction or CSS/UI polish
- avoid event/runtime refactors until workout-mode render boundaries are more complete

Best narrow candidates:

1. finish summary overlay markup boundary
2. workout-mode block header wrapper boundary
3. readonly progress pill renderer cleanup

