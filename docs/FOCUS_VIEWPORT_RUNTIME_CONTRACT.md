# Focus / Viewport Runtime Contract

## Purpose

The focus / viewport restore system exists to keep exercise editing stable across rerenders.

Its job is to preserve:

- scroll continuity
- active card positioning
- focused field continuity
- selection range where possible
- post-update field targeting

This is especially important because the app frequently rerenders the exercise list after:

- state commits
- UI commits
- set additions
- done toggles
- search/result jumps
- workout mode transitions

Without this system, rerenders would feel visually jumpy and would often break editing flow.

## Core Design

The system is split into two phases:

1. **Queue / capture**
2. **Restore / apply**

This split is intentional and must remain stable.

## Queue Responsibilities

### `queueExerciseViewportRestore()`

Purpose:

- capture the current visible exercise-card context before a rerender

Internally depends on:

- `captureExerciseViewportContext()`

Captured data may include:

- current exercise card id
- card top position in viewport
- focused field selector
- selection start / end

This is used for same-screen continuity after rerender.

### `queueWorkoutFieldFocus(selector)`

Purpose:

- request targeted focus after rerender

Typical use:

- after creating a new set
- after a workflow where the next field should be focused deliberately

This is not the same as generic viewport restore.
It is an explicit follow-up focus instruction.

## Restore Responsibilities

### `restoreExerciseViewportContext()`

Purpose:

- re-anchor the previous exercise card position after rerender
- restore focus to the previous field when appropriate
- restore text selection if available

Key responsibilities:

- find the same exercise card again
- adjust window scroll by the top delta
- restore focus using the captured selector
- restore selection range if supported

### `restoreWorkoutFieldFocus()`

Purpose:

- apply explicit post-render focus requests

Typical use:

- focus the newly created set field after append

This is more specific and should run after markup exists.

## Queue vs Restore Ownership

### Queue phase is triggered by:

- `commitStateUpdate(...)`
- `commitUiUpdate(...)`
- targeted flows like set add / field focus

### Restore phase is triggered by:

- `renderExercises()` post-render `requestAnimationFrame(...)`

This division is critical.

Queue before rerender.
Restore after rerender.

## Render Timing Dependencies

This system depends on render timing being preserved.

Important assumption:

- DOM must already be replaced before restore runs

That is why restore happens **after** render, not during state mutation.

The current ordering is:

1. capture before render
2. render scheduled
3. DOM updated
4. `requestAnimationFrame(...)`
5. restore viewport
6. restore explicit field focus

If this order changes, the system may stop working reliably.

## `requestAnimationFrame` Integration

Current integration lives in `renderExercises()`.

After fresh markup is mounted and after `bindExerciseEvents()` runs, the code schedules:

- `restoreExerciseViewportContext()`
- `restoreWorkoutFieldFocus()`

inside `requestAnimationFrame(...)`.

Why this matters:

- lets browser finish DOM update first
- makes focus restore happen against mounted elements
- reduces timing race conditions

This is a required part of the contract.

## Required DOM Hooks

The system depends on exact hook preservation.

### Required hooks

- `data-exercise-card`
- `data-role`
- `data-ex`
- `data-idx`
- `.active-workout`
- `.setrow`

### Selector-building dependency

`buildFocusRestoreSelector(...)` depends on:

- `data-role`
- `data-ex`
- optional `data-idx`

If any of these change, focus restore can fail silently.

## Interaction with `renderExercises()`

`renderExercises()` is the main consumer/orchestrator for this system.

It currently:

- mounts fresh exercise markup
- binds events
- applies set-row guidance
- schedules restore via `requestAnimationFrame(...)`

This means:

- `renderExercises()` remains runtime owner
- focus/viewport restore should not be moved into readonly helpers

## Interaction with `bindExerciseEvents()`

`bindExerciseEvents()` and the restore system are coupled indirectly.

Examples:

- focused set input fields must still exist after rerender
- add-set flow queues explicit field focus
- done-toggle flow may move user to the next relevant row
- input-row-active styling depends on focus lifecycle

`bindExerciseEvents()` must therefore preserve:

- exact field hooks
- exact row hierarchy
- exact `data-role/data-ex/data-idx` contract

## Interaction with Workout Mode

Workout mode increases sensitivity here because:

- only the active workout block is rendered
- rerenders may change visible subset of cards
- active workout card has special class usage

Relevant contract points:

- `.active-workout` must remain meaningful
- `data-exercise-card` must stay stable
- active block rendering must remain predictable

If workout mode orchestration changes later, this contract must be re-audited.

## Mobile Viewport Considerations

This system is especially important on mobile.

Why:

- keyboard open/close changes viewport
- blurred inputs may trigger follow-up advance behavior
- rerenders are more visually disruptive on a small screen

The system currently helps preserve:

- reduced scroll jump
- next-field focus continuity
- better edit flow after add-set

Any refactor must be tested in narrow/mobile viewport.

## Protected / No-Touch Warnings

Do not casually change:

- `buildFocusRestoreSelector(...)`
- `captureExerciseViewportContext()`
- `restoreExerciseViewportContext()`
- `queueWorkoutFieldFocus(...)`
- `restoreWorkoutFieldFocus()`
- `requestAnimationFrame(...)` restore timing in `renderExercises()`
- `data-exercise-card`
- `data-role/data-ex/data-idx` selector contract

These are protected runtime surfaces.

## Future Refactor Prerequisites

Before touching this system structurally, the following should exist:

1. Stable render-boundary checkpoint
2. DOM hook inventory
3. Event binding map
4. `bindExerciseEvents()` contract documentation
5. Manual QA checklist covering:
   - typing in kg/reps
   - add set
   - done toggle
   - search jump
   - workout mode navigation
   - mobile keyboard flow

Only after that should refactor work begin.

## Safe Future Refactor Direction

If this area is touched later, safest order is:

1. documentation
2. tiny internal helper naming cleanup only
3. no behavior change verification
4. only then limited structural refactor

Do not move this system into readonly helper boundaries.

This is runtime-only logic and should stay in runtime ownership.

