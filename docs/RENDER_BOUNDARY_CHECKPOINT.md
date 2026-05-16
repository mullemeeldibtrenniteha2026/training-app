# Render Boundary Checkpoint

## Summary

This document captures the current render-boundary architecture checkpoint after the recent readonly V2 extractions.

The current direction is intentionally conservative:

- `index.html` remains the runtime owner
- V2 helpers remain readonly render/value helpers
- event binding, state mutation, and focus/timing ownership stay in `index.html`

This is a stability checkpoint, not a rewrite checkpoint.

## Current Architecture Checkpoint

The app currently follows this split:

### `index.html`

Owns runtime orchestration:

- state selection
- UI branching
- workout mode orchestration
- search filtering
- cloud/local/auth runtime flow
- event binding
- focus/viewport restore
- timer runtime
- finish workout flow

### `v2/*`

Own readonly render/value helpers:

- string renderers
- simple value adapters
- small composer helpers
- label/tone mapping helpers

Helpers do **not** own:

- DOM queries
- event binding
- state mutation
- `ui` mutation
- localStorage
- Supabase

## `index.html` Runtime Ownership

The following still correctly live in `index.html`:

- `renderExercises()` orchestration
- `bindExerciseEvents()`
- `commitStateUpdate(...)`
- `commitUiUpdate(...)`
- `finishWorkoutNow()`
- timer runtime
- focus/viewport restore helpers
- post-render DOM wiring
- search jump behavior
- workout mode block selection

This is intentional.

## V2 Readonly Helper Ownership

Current V2 readonly boundaries include:

### Workout mode

- `renderWorkoutHeader(...)`
- `renderWorkoutProgressPills(...)`
- `renderWorkoutActionPanel(...)`
- `renderWorkoutModeBody(...)`

File:

- `/Users/timoanis/Documents/GitHub/training-app/v2/workout-mode-helpers.js`

### Search results

- `renderSearchResultsCard(...)`
- `renderSearchResultItem(...)`
- `buildSearchResultItemInput(...)`

File:

- `/Users/timoanis/Documents/GitHub/training-app/v2/render-search-results-boundary.js`

### Empty states

- premium empty state:
  - `renderFirstWorkoutEmptyState(...)`
- plain empty state:
  - `renderPlainEmptyStateCard(...)`

Files:

- `/Users/timoanis/Documents/GitHub/training-app/v2/empty-state-render-helpers.js`
- `/Users/timoanis/Documents/GitHub/training-app/v2/render-plain-empty-state-boundary.js`

### Onboarding / feedback

- `shouldShowFirstWorkoutCta(...)`
- `getFirstWorkoutCreatedMessage(...)`

Files:

- `/Users/timoanis/Documents/GitHub/training-app/v2/onboarding-helpers.js`
- `/Users/timoanis/Documents/GitHub/training-app/v2/feedback-helpers.js`

### Group / exercise composition

- `renderExerciseGroupHeader(...)`
- `renderExerciseGroup(...)`
- `renderExerciseHeaderMetaMarkup(...)`
- `renderNormalExerciseCard(...)`
- `renderSingleExerciseCard(...)`
- `renderSupersetExerciseCard(...)`
- `buildExerciseShellMarkup(...)`

Files:

- `/Users/timoanis/Documents/GitHub/training-app/v2/render-group-header-boundary.js`
- `/Users/timoanis/Documents/GitHub/training-app/v2/render-group-composer-boundary.js`
- `/Users/timoanis/Documents/GitHub/training-app/v2/exercise-render-helpers.js`
- `/Users/timoanis/Documents/GitHub/training-app/v2/render-exercise-shell-boundary.js`

### Exercise sub-markup

- `buildExerciseDetailsMarkup(...)`
- `buildExerciseCompareMarkup(...)`
- `buildExerciseActionsMarkup(...)`

Files:

- `/Users/timoanis/Documents/GitHub/training-app/v2/render-exercise-details-boundary.js`
- `/Users/timoanis/Documents/GitHub/training-app/v2/render-exercise-compare-boundary.js`
- `/Users/timoanis/Documents/GitHub/training-app/v2/render-exercise-actions-boundary.js`

### Set rendering / value helpers

- `buildSetMarkup(...)`
- `buildSetsContainerMarkup(...)`
- `getSetDisplayIndex(...)`
- `getSetDoneState(...)`
- `getSetRepsValue(...)`
- `getSetWeightValue(...)`
- `formatSetRowDisplay(...)`

Files:

- `/Users/timoanis/Documents/GitHub/training-app/v2/render-set-markup-boundary.js`
- `/Users/timoanis/Documents/GitHub/training-app/v2/render-sets-container-boundary.js`
- `/Users/timoanis/Documents/GitHub/training-app/v2/render-set-helpers.js`
- `/Users/timoanis/Documents/GitHub/training-app/v2/workout-summary-helpers.js`

### Sync wording

- `getSyncStatusLabel(...)`
- `getSyncStatusTone(...)`

File:

- `/Users/timoanis/Documents/GitHub/training-app/v2/sync-status-helpers.js`

## Protected Zones

These areas must remain protected for now:

### 1. `bindExerciseEvents()`

Why protected:

- very high DOM/data-hook coupling
- autosave timing
- input sanitation
- set advance flow
- done toggle
- delete behavior
- rest field behavior

### 2. Focus / viewport restore subsystem

Includes:

- `queueExerciseViewportRestore()`
- `restoreExerciseViewportContext()`
- `queueWorkoutFieldFocus()`
- `restoreWorkoutFieldFocus()`

Why protected:

- tied to rerender timing
- tied to mobile editing flow
- tied to workout field continuity

### 3. Workout mode orchestration in `renderExercises()`

Why protected:

- active block selection
- exercise order preservation
- superset grouping preservation
- workout mode branching

### 4. `finishWorkoutNow()`

Why protected:

- done-state completion
- timer dismissal
- mode exit
- finish summary flow

### 5. Timer runtime

Why protected:

- wake lock
- timer overlay
- elapsed state
- button text updates

## Fallback Strategy

The current fallback strategy is deliberate:

- V2 helper available -> use helper
- V2 helper missing -> use inline fallback in `renderExercises()`

This keeps the app resilient when:

- helper files fail to load
- local `file://` runtime is used
- future helper extraction is partially disabled during testing

Current recommendation:

- keep fallbacks inline for now
- do not centralize or move them yet

This reduces boot/script-order risk.

## DOM Hook Contract Warnings

The current render/runtime contract depends on exact hook preservation.

Critical hook families:

- `data-role`
- `data-ex`
- `data-idx`
- `data-exercise-card`
- `data-workout-jump`
- `data-jump-week`
- `data-jump-day`
- `data-jump-ex`

Critical runtime-sensitive classes:

- `.setrow`
- `.donebtn`
- `.on`
- `.active-workout`
- runtime-applied:
  - `.is-done`
  - `.is-next`
  - `.input-row-active`

Warning:

Changing hook names, DOM placement, or expected hierarchy can break:

- set input behavior
- next-set advance
- set delete
- done-state guidance
- search jump
- scroll restore
- workout mode progress navigation

## Next Safe Extraction Candidates

After this checkpoint, the safest remaining extraction candidates are:

1. readonly compare input/composer adapters
2. readonly details input/composer adapters
3. small fallback-pair documentation only

Good candidates must remain:

- pure
- readonly
- string/value only
- runtime-neutral

## No-Touch Zones

For now, do not casually refactor:

- `bindExerciseEvents()`
- focus/viewport restore helpers
- workout mode active-group orchestration
- timer runtime
- finish workout flow
- search jump runtime behavior
- set input event flow
- rest-field mixed local/document binding behavior

## Checkpoint Decision

This version is safe to treat as a render-boundary architecture checkpoint.

Reason:

- readonly helper boundaries are expanding cleanly
- runtime ownership remains understandable
- protected zones stayed untouched
- no helper currently owns mutation, DOM, or events

