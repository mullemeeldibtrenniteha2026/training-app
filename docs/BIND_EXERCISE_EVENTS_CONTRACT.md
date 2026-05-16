# bindExerciseEvents() Contract

## Purpose

`bindExerciseEvents()` is the main runtime wiring function for exercise-card and set-row interaction after `renderExercises()` mounts fresh markup into the page.

Its job is **not** to decide what should be rendered.
Its job is to connect already-rendered DOM to runtime behavior.

This makes it one of the most protected runtime zones in the app.

## Core Responsibility

`bindExerciseEvents()` currently owns:

- set input behavior
- set advance behavior
- done toggles
- set deletion
- exercise deletion
- recovery/block completion toggles
- text-field draft save behavior
- search jump behavior
- workout prev/next navigation

It depends on exact DOM hooks already emitted by render helpers and `renderExercises()`.

## Current Segmented Helper List

`bindExerciseEvents()` is now internally segmented into small named helpers, but all runtime ownership still remains in the same file:

- `bindWorkoutSetInputFields()`
- `bindToggleSetButtons()`
- `bindDeleteSetButtons()`
- `bindRestFieldEvents()`
- `bindExerciseTextFieldEvents()`
- `bindSearchJumpEvents()`
- `bindWorkoutPrevNextButtons()`
- `bindAddSetButtons()`
- `bindToggleBlockButtons()`
- `bindDeleteExerciseButtons()`

Ownership note:

- all of these helpers still live in [index.html](/Users/timoanis/Documents/GitHub/training-app/index.html)
- this phase was **segmentation only**
- this phase was **not** a behavior refactor
- selectors, event timing, callback logic, and runtime ownership were intentionally preserved

## Subzones

### 1. Set input `kg` / `reps`

Hooks:

- `data-role="kg"`
- `data-role="reps"`
- `data-ex`
- `data-idx`
- `.setrow`

Behavior:

- sanitize input
- preserve draft typing behavior
- autosave locally
- update volume display
- handle mobile and keyboard advance
- manage row focus styling

State mutation:

- yes

Uses `commitStateUpdate()`:

- not for ordinary typing
- uses direct field updates + local save
- advance flow may later trigger state commit through add-set path

Risk:

- very high

Warnings:

- depends on exact row DOM shape
- depends on sibling fields inside the same `.setrow`
- depends on `data-ex` and `data-idx`
- preserve comma-decimal handling for `kg`
- preserve composition-event safety
- preserve blur fallback timing and pointer guard timing

Current runtime contract summary:

- typing sanitizes value immediately
- state is updated directly on draft edit
- volume field updates live from the same row
- autosave runs during draft editing
- Enter / Next / Go / Done can trigger advance
- `kg` advances to same-row `reps`
- `reps` advances to next-row `kg` or appends a new set
- mobile blur fallback may trigger delayed advance if guards allow it

### 2. Done toggle

Hooks:

- `data-role="toggle-set"`
- `data-ex`
- `data-idx`
- `.donebtn`
- `.setrow`

Behavior:

- toggle set done state
- rerender exercise list
- show toast
- advance focus to next unfinished row

State mutation:

- yes

Uses `commitStateUpdate()`:

- yes

Risk:

- very high

Warnings:

- tightly coupled to `applySetRowGuidance()`
- depends on `.setrow.is-next`

Current runtime contract summary:

- toggles `done` state through `toggleWorkoutSetDoneState(...)`
- rerender is triggered through `commitStateUpdate(...)`
- toast wording depends on the new done state
- if toggled to done, next unfinished row focus is attempted in `requestAnimationFrame(...)`
- next-row focus relies on `applySetRowGuidance()` having already marked `.is-next`

### 3. Delete set

Hooks:

- `data-role="delete-set"`
- `data-ex`
- `data-idx`
- `.setdeletebtn`

Behavior:

- suppress normal click
- arm hold-to-delete timer
- mouse/touch guard behavior
- commit set removal

State mutation:

- yes

Uses `commitStateUpdate()`:

- yes

Risk:

- very high

Warnings:

- includes gesture timing behavior
- must preserve touch and mouse parity

Current runtime contract summary:

- plain click is suppressed and must not delete
- delete only happens through hold-to-delete path
- mouse uses left-button hold
- touch sets `_ignoreMouseUntil` to block synthetic follow-up mouse events
- release / leave / cancel must clear the hold timer
- deletion rerenders exercises and shows `Set removed`

### 4. Add set

Hooks:

- `data-role="add-set"`
- `data-ex`

Behavior:

- append new set to exercise
- rerender exercise section
- queue focus to new set field

State mutation:

- yes

Uses `commitStateUpdate()`:

- yes, indirectly through `appendWorkoutSetWithFocus(...)`

Risk:

- medium

Warnings:

- depends on field focus restore subsystem

### 5. Delete exercise

Hooks:

- `data-role="delete"`
- `data-ex`

Behavior:

- confirm deletion
- remove exercise
- rerender exercise section

State mutation:

- yes

Uses `commitStateUpdate()`:

- yes

Risk:

- medium

### 6. Recovery / block toggle

Hooks:

- `data-role="toggle-block"`
- `data-ex`

Behavior:

- toggle block completion flag
- rerender exercise section

State mutation:

- yes

Uses `commitStateUpdate()`:

- yes

Risk:

- medium

### 7. Text fields: `name`, `code`, `note`

Hooks:

- `data-role="name"`
- `data-role="code"`
- `data-role="note"`
- `data-ex`

Behavior:

- draft local save
- normalize on change where needed
- keep display values in sync with state

State mutation:

- yes

Uses `commitStateUpdate()`:

- no
- uses direct updates + `commitTextFieldWithoutRender()` in finalization paths

Risk:

- medium

Warnings:

- `name` field also manages autosize behavior

### 8. Rest field special handling

Hooks:

- `data-role="rest"`
- `data-ex`

Behavior:

- local input draft save
- arrow up/down rest stepping
- normalize rest value
- both local and document-level listeners exist

State mutation:

- yes

Uses `commitStateUpdate()`:

- no

Risk:

- very high

Warnings:

- this is a special-case zone
- behavior is split across:
  - local binding inside `bindExerciseEvents()`
  - document-level `keydown`
  - document-level `blur`
  - document-level `change`

Any refactor here must audit both layers together.

Current runtime contract summary:

- local `rest` binding still lives inside `bindExerciseEvents()` through `bindRestFieldEvents()`
- document-level `keydown`, `blur`, and `change` listeners still also exist
- ArrowUp / ArrowDown step by 15 seconds
- local typing autosaves drafts
- `change` path commits through `commitTextFieldWithoutRender()`
- any future cleanup must treat local and document-level behavior as one shared contract

### 9. Search jump

Hooks:

- `data-jump-week`
- `data-jump-day`
- `data-jump-ex`
- `data-exercise-card`

Behavior:

- jump to selected week/day
- clear search
- set active exercise index
- scroll matching card into view

State mutation:

- yes, UI state

Uses `commitStateUpdate()`:

- no
- uses `commitUiUpdate(...)`

Risk:

- medium

Warnings:

- depends on search result hook contract and exercise card hook contract

### 10. Workout prev/next navigation

Hooks:

- `#prevExerciseBtn`
- `#nextExerciseBtn`

Behavior:

- move active workout block backward / forward

State mutation:

- yes, UI state

Uses `commitStateUpdate()`:

- no
- uses `commitUiUpdate(...)`

Risk:

- medium

Warnings:

- tied to workout-mode orchestration in `renderExercises()`

## Required DOM Hooks / Data Attributes

These hooks are runtime-critical:

- `data-role`
- `data-ex`
- `data-idx`
- `data-setrow`
- `data-exercise-card`
- `data-jump-week`
- `data-jump-day`
- `data-jump-ex`
- `#prevExerciseBtn`
- `#nextExerciseBtn`

Related runtime-sensitive classes:

- `.setrow`
- `.donebtn`
- `.on`
- `.input-row-active`
- `.is-done`
- `.is-next`

## State Mutation Summary

Flows that mutate state:

- kg/reps typing
- done toggle
- delete set
- add set
- delete exercise
- recovery/block toggle
- name/code/note updates
- rest updates

Flows that are UI-only:

- search jump
- workout prev/next navigation

## `commitStateUpdate()` Usage Summary

Uses `commitStateUpdate()`:

- done toggle
- delete set
- add set
- delete exercise
- recovery/block toggle

Does not use `commitStateUpdate()` for normal field editing:

- kg/reps typing
- name/code/note editing
- rest editing

These use direct mutation plus local save / no-render commit helpers.

## Remaining Protected Zones

Even after internal segmentation, these zones remain protected:

- `bindWorkoutSetInputFields()`
- `bindToggleSetButtons()`
- `bindDeleteSetButtons()`
- document-level `rest` listeners
- `applySetRowGuidance()`
- `handleWorkoutSetAdvance(...)`
- timer runtime
- focus / viewport restore runtime
- `finishWorkoutNow()`
- workout mode active-group orchestration in `renderExercises()`

## Protected / No-Touch Warnings

Do not casually refactor:

- selector names
- `data-role` values
- `data-ex`
- `data-idx`
- `.setrow` hierarchy
- rest-field split listener model
- next-row focus logic after done toggle
- hold-to-delete timing behavior

Why:

- these bindings depend on exact DOM contracts
- focus behavior, mobile behavior, and rerender timing are tightly coupled here

## Future Refactor Prerequisites

Before touching `bindExerciseEvents()` structurally, the following should exist:

1. Stable render-boundary checkpoint
2. DOM hook inventory
3. Event binding map
4. Focus/viewport contract documentation
5. Manual QA checklist covering:
   - set input typing
   - comma decimal behavior
   - set done toggle
   - next-row advance
   - delete set hold gesture
   - rest field keyboard behavior
   - search jump
   - workout prev/next navigation

Only after that should refactor work begin.

Additional prerequisites after segmentation:

6. Confirm all segmented internal helpers still preserve exact event order and callback behavior
7. Confirm protected timer / focus / finish flows remain untouched
8. Confirm `rest` local and document-level listeners are audited together before any consolidation
9. Confirm `kg/reps`, `toggle-set`, and `delete-set` each have their own runtime checkpoint notes

## Refactor Safety Recommendation

If refactoring becomes necessary later:

- first split documentation and reasoning, not behavior
- then extract tiny internal helper functions inside `index.html`
- do not move event ownership out until contracts are verified

For now, `bindExerciseEvents()` should remain a protected runtime boundary.
