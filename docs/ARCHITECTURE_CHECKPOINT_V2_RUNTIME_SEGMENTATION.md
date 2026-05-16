# Architecture Checkpoint: V2 Runtime Segmentation

## Checkpoint Summary

This checkpoint captures the app state after two major hardening phases:

1. readonly render-boundary extraction
2. internal runtime segmentation inside `index.html`

The current architecture is intentionally hybrid:

- render/output concerns are increasingly delegated to V2 readonly helpers
- runtime ownership still remains centralized in `index.html`
- the highest-risk runtime paths are now segmented into named internal helpers, but are not yet behavior-refactored

This is an intentional checkpoint, not an unfinished half-refactor.

## Current Architecture Maturity Estimate

Estimated maturity: **7.5 / 10**

Why this is stronger than earlier checkpoints:

- render-boundary ownership is much clearer
- adapter/composer work reduced render assembly noise
- `bindExerciseEvents()` is no longer one monolithic anonymous runtime block
- protected zones are now more explicitly mapped and documented

Why this is not yet a final-runtime architecture:

- event/runtime behavior still lives in one file
- focus/viewport restore remains tightly timing-coupled
- timer runtime is still centralized and DOM-driven
- `finishWorkoutNow()` remains a protected completion flow
- workout orchestration still depends on central branching inside `renderExercises()`

## Completed Render-Boundary Work

Completed readonly render extraction includes:

- sync status wording helper
- signed-in empty-state renderer
- onboarding CTA visibility helper
- first-workout feedback helper
- workout mode header/progress/action/body render helpers
- search results render helpers
- normal view group header renderer
- normal view group composer renderer
- exercise header/meta renderer
- single exercise shell renderer
- superset shell renderer
- set container renderer
- set row renderer
- plain empty-state renderer

Render ownership outcome:

- V2 helpers render strings / markup only
- runtime ownership remains in `index.html`
- fallbacks still exist for safe loading in a local multi-script environment

## Completed Adapter / Composer Extraction Work

Completed adapter/composer extraction includes:

- compare input adapter
- details input adapter
- actions input adapter
- shell input adapter
- workout header input adapter
- empty-state input adapters
- search result input/composer adapter

Adapter/composer outcome:

- input preparation is now cleaner
- helper boundaries remain readonly
- no DOM, event, state mutation, or runtime ownership was moved into V2 helpers

## Completed `bindExerciseEvents()` Segmentation Work

`bindExerciseEvents()` now delegates internally to named helpers, all still in `index.html`:

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

Important ownership note:

- this was **segmentation**
- this was **not** a runtime behavior refactor
- selectors, events, ordering, timing, and callback logic were intentionally preserved

## Protected Runtime Zones Still Intentionally Centralized

The following runtime zones remain intentionally centralized and protected:

- timer runtime
- focus / viewport restore runtime
- `finishWorkoutNow()`
- workout mode active-group orchestration
- `renderExercises()` runtime branching
- `applySetRowGuidance()`
- document-level `rest` listeners

These are not unfinished extractions.
They are intentionally preserved boundaries because the behavior risk is still high.

## Known Remaining Architecture Debt

### 1. Runtime still concentrated in `index.html`

This is currently acceptable, but it remains the biggest structural debt.

### 2. `rest` field behavior is split across two layers

- local field handlers inside `bindExerciseEvents()`
- document-level listeners outside it

This is documented and intentional for now, but still awkward.

### 3. `bindWorkoutSetInputFields()` remains highly coupled

It owns:

- typing
- sanitize
- autosave
- volume update
- composition safety
- Enter/advance behavior
- blur fallback behavior

This is one of the highest-risk runtime zones in the app.

### 4. `toggle-set` depends on post-render guidance timing

`bindToggleSetButtons()` depends on:

- rerender timing
- `applySetRowGuidance()`
- `.is-next` row selection

### 5. `delete-set` includes a gesture runtime contract

It includes:

- hold-to-delete timing
- click suppression
- mouse/touch parity
- synthetic mouse guard after touch

### 6. Fallback helper cluster still adds complexity

This is more of a readability debt than a behavior debt, but it still exists.

## Explicit No-Go Zones For Future Refactors

Do not casually refactor:

- `data-role`, `data-ex`, `data-idx`, `data-exercise-card`
- `.setrow` DOM hierarchy
- timer runtime internals
- focus/viewport restore timing
- `finishWorkoutNow()`
- workout mode active-group selection
- `applySetRowGuidance()`
- `rest` local/document dual-listener model
- delete-set hold timing and touch guard
- kg/reps blur fallback timing

Do not:

- move runtime handlers into V2 readonly helper files
- change `requestAnimationFrame(...)` restore timing casually
- refactor timer, focus, and finish flows in the same pass
- merge runtime cleanup with product feature changes in one step

## Recommended Next Major Phase

Recommended next major phase:

- **product-feature development**, not immediate deeper runtime extraction

Why:

- the app now has a much better architecture baseline
- current runtime segmentation is strong enough to support safer feature work
- the next remaining runtime targets are significantly higher risk
- forcing “real V2 runtime extraction” now would increase regression risk without clear product benefit

When a runtime-focused phase makes sense again:

- only after new product work stabilizes
- only after a new QA checkpoint confirms runtime behavior remains healthy

## When Real V2 Runtime Extraction Would Be Appropriate

A deeper V2 runtime extraction phase should only begin if all of these are true:

- current product baseline is stable
- runtime segmentation checkpoint has held through additional feature work
- runtime QA coverage has been rerun recently
- there is a clear maintenance payoff, not just architectural neatness

If that happens, the order should likely be:

1. documentation refresh
2. runtime contract audit refresh
3. narrow internal refactor
4. only then consider extracting runtime ownership boundaries

## Criteria Required Before Touching Timer Runtime

Before touching timer runtime:

- timer open / close / start / pause / reset QA must be current
- button hook ownership must be explicitly re-verified
- wake lock behavior must be audited together with timer changes
- workout mode dependency on timer controls must be documented in the same pass

## Criteria Required Before Touching Focus / Viewport Runtime

Before touching focus / viewport runtime:

- queue vs restore contract must already be up to date
- all render timing dependencies must be re-audited
- mobile viewport behavior must be manually checked
- no concurrent refactor may touch set input advance behavior in the same pass

## Criteria Required Before Touching `finishWorkoutNow()`

Before touching `finishWorkoutNow()`:

- full finish workout flow QA must be current
- done-state completion semantics must be documented and verified
- finish summary overlay behavior must be checked in the same pass
- no timer/runtime refactor should happen simultaneously

## Criteria Required Before Touching Workout Orchestration

Before touching workout orchestration:

- active-group selection behavior must be re-audited
- progress pill behavior must be rechecked
- prev/next runtime must already be stable after segmentation
- superset grouping must be explicitly regression-tested
- finish workflow and timer workflow must not be in motion at the same time

## Final Recommendation

This architecture checkpoint is strong enough to treat as a new baseline.

Recommended direction from here:

- preserve current runtime ownership
- use the improved architecture to support product work
- return to deeper runtime extraction only when there is a clear maintenance need and fresh QA support

In short:

- readonly render extraction: complete enough
- adapter/composer extraction: complete enough
- runtime segmentation: complete enough
- deeper runtime refactor: intentionally postponed
