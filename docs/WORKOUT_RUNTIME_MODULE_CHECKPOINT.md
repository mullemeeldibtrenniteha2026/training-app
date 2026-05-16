# Workout Runtime Module Checkpoint

## Checkpoint Summary

This document captures the current workout runtime module boundary after:

- readonly render extraction
- adapter/composer extraction
- `bindExerciseEvents()` runtime segmentation
- initial workout runtime extraction into a V2 runtime module

The app now has a real workout-specific runtime boundary, but only for the safer parts of workout mode.

## Current V2 Workout Runtime Ownership

Current workout runtime module:

- [v2/workout-runtime-helpers.js](/Users/timoanis/Documents/GitHub/training-app/v2/workout-runtime-helpers.js)

This module currently owns two kinds of responsibility:

1. pure workout-mode state/read helpers
2. selected workout-mode DOM binding helpers using dependency injection

It does **not** own timer internals, finish flow internals, focus/viewport restore, or workout render orchestration.

## Pure Helpers In `v2/workout-runtime-helpers.js`

Current pure helpers:

- `clampActiveWorkoutIndex(...)`
- `getActiveWorkoutGroup(...)`
- `buildWorkoutProgressItems(...)`
- `buildWorkoutFocusMeta(...)`
- `getWorkoutAddSetTarget(...)`

These helpers are intentionally pure:

- no DOM queries
- no event binding
- no `ui` mutation
- no `state` mutation
- no rendering side effects

Their job is to support workout mode runtime decisions while keeping state ownership in `index.html`.

## Runtime Bindings Moved To V2

Current runtime bindings moved into the V2 workout runtime module:

- `bindWorkoutProgressJumpButtons(...)`
- `bindWorkoutPrevNextButtons(...)`
- `bindWorkoutBottomActionButtons(...)`

Covered workout-mode controls:

- progress pill click: `data-workout-jump`
- prev button: `#prevExerciseBtn`
- next button: `#nextExerciseBtn`
- bottom add exercise: `#bottomAddExerciseBtn`
- bottom add set: `#bottomAddSetBtn`
- bottom timer: `#bottomTimerBtn`

Important ownership rule:

- V2 helper binds DOM hooks
- `index.html` injects the real callbacks and dependencies
- state ownership remains in `index.html`

This means the module is runtime-aware, but not runtime-sovereign.

## What Still Remains In `index.html`

The following workout runtime responsibilities still remain in [index.html](/Users/timoanis/Documents/GitHub/training-app/index.html):

- `ui.workoutMode` ownership
- `ui.activeExerciseIndex` ownership
- workout mode entry / exit behavior
- workout keyboard navigation
- `renderExercises()` workout-mode orchestration
- `activeGroup` orchestration
- finish button wiring
- `finishWorkoutNow()`
- timer open callback ownership
- fallback paths if V2 runtime helper is unavailable

This is intentional.

## Why Timer / Focus / Finish Remain Protected

### Timer remains protected

Timer runtime still owns:

- start / pause / reset / close logic
- live timer state
- wake lock behavior
- overlay interaction
- bottom timer label/state update through `renderTimer()`

Moving it now would increase risk without enough maintenance benefit.

### Focus / viewport remains protected

Focus and viewport restore still depend on:

- render timing
- `requestAnimationFrame(...)`
- queue/restore sequencing
- mobile behavior
- set-input runtime timing

This is still too coupled to move casually.

### Finish flow remains protected

`finishWorkoutNow()` still owns:

- dismiss timer
- mark entire workout done
- exit workout mode
- persist local state
- update workout mode button text
- open finish summary

This is a high-consequence flow and should remain centralized for now.

## Remaining Workout Runtime Debt

### 1. `bindWorkoutActionPanelButtons(groupsForDay)` still contains dual ownership

It currently has:

- V2 injected binding path
- inline fallback binding path

This is acceptable, but still somewhat noisy.

### 2. Workout keyboard navigation remains outside the module

`handleWorkoutModeKeydown(...)` is still local to `index.html`.

### 3. Workout orchestration is still centralized

`renderExercises()` still owns:

- workout mode branching
- active group selection
- progress item inputs
- workout-mode render composition

### 4. Fallback duplication remains

This is not a functional problem, but it keeps some visual complexity alive.

## Future Extraction Criteria

Before extracting more workout runtime into V2, all of these should be true:

1. Current workout runtime checkpoint remains stable through additional work
2. Workout mode QA is rerun after any product changes
3. No concurrent refactor touches timer, finish, and focus in the same pass
4. `renderExercises()` workout-mode orchestration is re-audited before touching it
5. Keyboard navigation ownership is explicitly reviewed before moving it

Additional criteria before touching protected zones:

- timer runtime:
  - timer interaction QA must be current
  - bottom timer label/state update path must remain verified
- focus/viewport runtime:
  - queue/restore contract must be revalidated
  - mobile viewport behavior must be tested
- finish flow:
  - full finish workout path must be retested end-to-end
  - summary overlay behavior must be retested

## QA Checklist For Workout Runtime Changes

Use this checklist before and after any workout runtime changes:

- Enter workout mode and confirm the same first active block opens
- Progress pill click jumps to the correct block
- Prev button works
- Next button works
- Active block label remains correct
- Supersets remain grouped together
- Bottom `+ Exercise` scrolls/focuses the add field
- Bottom `+ Set` targets the same active exercise as before
- Bottom `Timer` opens the timer unchanged
- Timer button label still updates while running/paused
- Finish workout confirm flow still works
- Finish workout still exits workout mode correctly
- Normal exercise view remains unchanged
- Workout mode rerender keeps all bottom buttons working
- Calendar behavior remains unchanged

## Recommendation

This workout runtime module phase is complete enough for now.

Recommended next direction:

- do not immediately continue deeper workout runtime extraction
- prefer product-feature development or checkpoint documentation updates
- only revisit deeper workout runtime extraction when there is a clear maintenance need

In short:

- safe workout runtime helpers: extracted
- safe workout runtime bindings: extracted
- protected workout runtime core: intentionally still centralized
