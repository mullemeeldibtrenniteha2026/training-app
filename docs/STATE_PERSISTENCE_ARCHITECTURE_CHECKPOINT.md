# State & Persistence Architecture Checkpoint

## Checkpoint Summary

This checkpoint documents the current state and persistence architecture after the render/runtime segmentation phase.

The current model is intentionally conservative:

- workout data lives in one global `state` object
- UI/runtime state lives in one global `ui` object
- local persistence is the primary write path
- cloud sync is a secondary, debounced replication path
- migrations and user-scoped bootstrap remain centralized in `index.html`

This is a stable checkpoint, not a behavior refactor.

## Current State Ownership Model

### `state`

`state` is the application data model. It owns:

- workout days and weeks
- exercise ordering
- single vs superset structure
- set objects
- set `kg`, `reps`, `done`
- exercise note/rest/recovery-related fields
- hidden flags
- schema metadata under `__meta`
- cloud metadata under `_cloudMeta`

`state` is loaded through:

- `loadState(...)`
- `loadStateFromStorageKey(...)`

and normalized through:

- `normalizeAppState(...)`

### `ui`

`ui` is the UI/runtime model. It owns:

- `week`
- `day`
- `month`
- `search`
- `workoutMode`
- `activeExerciseIndex`
- `radarMode`
- `calendarCollapsed`
- `addBusy`
- add-flow transient values
- render timers / UI-only runtime values

`ui` is normalized through:

- `normalizeUiState()`

## State vs UI Boundary

The architecture already has a meaningful separation:

- `state` is workout/domain data
- `ui` is navigation/render/runtime state

Main commit boundaries:

- `commitStateUpdate(...)`
  - use when workout/domain data changes
- `commitUiUpdate(...)`
  - use when UI-only state changes

This is one of the stronger boundaries in the current architecture.

Known caveat:

- many runtime flows still mutate `state` directly before calling `commitStateUpdate(...)`
- this means the model is disciplined-mutation, not immutable-state

## `commitStateUpdate(...)` Responsibilities

`commitStateUpdate(...)` is the main state commit boundary.

It currently owns:

- optional pre-render viewport capture for exercise renders
- executing the passed mutator
- error containment around the mutator
- `state = normalizeAppState(state)`
- `normalizeUiState()`
- writing scoped state to localStorage
- updating local save status text
- scheduling cloud sync
- optional toast display
- render dispatch
- wake lock sync scheduling

This function is both:

- a persistence boundary
- a render/runtime side-effect boundary

That makes it high-value and high-risk.

## `commitUiUpdate(...)` Responsibilities

`commitUiUpdate(...)` is the UI-only commit boundary.

It currently owns:

- optional pre-render viewport capture for exercise renders
- executing the passed UI mutator
- error containment around the mutator
- `normalizeUiState()`
- persisting UI selection
- render dispatch
- wake lock sync scheduling

It does not:

- write workout `state`
- schedule cloud state writes directly

This keeps UI-only changes cleaner than domain-data changes.

## Local-First Persistence Flow

Local persistence is the primary source of truth for writes.

Typical flow:

1. runtime mutates `state`
2. commit/save path normalizes `state`
3. scoped localStorage is updated immediately
4. save status text is updated
5. cloud sync is scheduled later if allowed

Primary local write paths:

- `saveState()`
- `saveStateQuiet(...)`
- `commitStateUpdate(...)`
- `persistLocalStateNow()`

Additional local write paths also exist in:

- migration writeback
- cloud load replacement
- cloud save pre-upsert write
- backup restore/import
- unload/visibility persistence

This local-first model is intentional and should be preserved.

## Cloud Sync Flow

Cloud sync is secondary to local persistence.

Main cloud functions:

- `fetchCloudRow()`
- `loadCloudState()`
- `saveCloudStateNow()`
- `scheduleCloudSave()`
- `startCloudBootstrap()`

Cloud save is gated by:

- `cloudReady`
- `currentUser`
- `!applyingCloudState`
- `initialSyncResolved`

Cloud write behavior:

- local data is written first
- cloud write is debounced
- existing cloud state is checked before overwrite
- empty local state is blocked from overwriting non-empty cloud workout data

This is a replication model, not a concurrent merge model.

## Scoped localStorage Keys

Current key model:

- app state base key:
  - `timo_training_v81_real`
- user-scoped app state:
  - `timo_training_v81_real__user__<userId>`
- UI selection base key:
  - `timo_training_ui_selection_v1`
- user-scoped UI selection:
  - `timo_training_ui_selection_v1__user__<userId>`
- primary legacy import flag:
  - `timo_training_primary_state_import_v1__user__<userId>`

Snapshot-related keys:

- `timo_training_local_safety_snapshot`
- `timo_training_snapshot_v1__<timestamp>__<reason>`

Important rule:

- signed-in users should use scoped keys
- legacy/global storage still exists for migration/import compatibility

## Cloud Bootstrap Precedence

When a signed-in session boots, the current precedence is:

1. valid cloud state
2. valid scoped local state
3. primary-user legacy global import
4. empty normalized seed state

`startCloudBootstrap()` is the central owner of this decision tree.

This precedence is delicate because it combines:

- auth/session state
- cloud availability
- local scoped state
- legacy migration/import behavior

## Migration / Integrity Flow

Migration boundary:

- `loadStateFromStorageKey(...)`
- `runMigrations(...)`
- `verifyMigrationIntegrity(...)`

Current schema:

- `3.8`

Migration flow:

1. load raw JSON from localStorage
2. parse original state
3. if schema mismatch:
   - create local snapshot
   - normalize
   - run explicit migrations
4. verify migration integrity
5. write migrated state back to localStorage

Integrity rules explicitly protect:

- week/day structure
- exercise ordering
- single/superset structure
- set counts
- `kg`
- `reps`
- done states

This is one of the highest-stakes architecture zones in the app.

## Protected Persistence / Runtime Zones

These zones should remain protected for now:

- `commitStateUpdate(...)`
- `commitUiUpdate(...)`
- `loadStateFromStorageKey(...)`
- `runMigrations(...)`
- `verifyMigrationIntegrity(...)`
- `importPrimaryLegacyStateIfNeeded(...)`
- `loadCloudState()`
- `saveCloudStateNow()`
- `startCloudBootstrap()`
- snapshot restore/import flows
- auth-scoped state handoff

These areas combine persistence, migration, auth, and runtime rendering side effects.

## Remaining Architecture Debt

Current debt areas:

- multiple direct local write paths exist outside one single persistence adapter
- `state` mutation often happens before commit boundaries
- cloud sync and local persistence are still co-located in `index.html`
- `_cloudMeta` lives inside main app state
- legacy global-to-scoped import logic is still intertwined with signed-in bootstrap
- migration, normalization, and writeback all live in one large file

This is manageable debt, but it is real debt.

## Safe Future Extraction Candidates

Low-risk later candidates:

- storage key builder helpers
- UI selection serialization helpers
- pure cloud-save eligibility helper
- pure cloud payload builder
- pure bootstrap decision helper that returns a decision object only
- pure persistence/reporting helpers around integrity checks

Medium-risk later candidates:

- local state write adapter
- scoped-state read adapter
- cloud bootstrap decision extraction without changing side effects

Any extraction should stay pure first and avoid moving write ownership too early.

## No-Go Areas

Do not casually refactor:

- migration writeback behavior
- cloud bootstrap precedence
- primary legacy import behavior
- blocked cloud-save guard when local is empty and cloud has workout data
- scoped key selection rules
- snapshot restore/import safety flow
- direct `state` normalization before persistence
- `commitStateUpdate(...)` render and wake-lock side effects

These are not cleanup targets. They are behavior contracts.

## QA Checklist For Persistence Changes

Before and after any persistence-related change, verify:

1. workout edits persist after reload
2. done states persist after reload
3. exercise order persists after reload
4. single vs superset structure persists after reload
5. rest and note values persist after reload
6. UI week/day selection persists correctly
7. signed-out local-only mode still works
8. signed-in scoped local state still loads correctly
9. cloud bootstrap prefers cloud when cloud has valid workout state
10. cloud bootstrap falls back to scoped local when cloud is empty/unavailable
11. primary legacy import only happens when intended
12. backup import restores valid data without corrupting structure
13. snapshot restore restores valid data and keeps app usable
14. migration path preserves done states and set counts
15. cloud save does not overwrite non-empty cloud state with empty local state
16. offline mode still preserves local changes
17. returning online still schedules cloud sync correctly

## Bottom Line

The current persistence architecture is stable because it is cautious:

- local first
- scoped when signed in
- cloud second
- migration guarded
- UI and workout data mostly separated

The next safe phase is not a deep refactor. It is selective extraction of pure helpers and tighter documentation around direct local write paths.
