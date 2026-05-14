# Bootstrap State Machine

## Purpose

This document describes the current MVP1 bootstrap behavior for auth, cloud/local state ownership, fallback order, and visible sync wording.

The active implementation baseline remains `index.html`.

## Core Rule

Bootstrap must choose the visible app state in a predictable order without leaking workout data or calendar markers across users.

## Canonical Priority

### 1. Signed-out

- Show the auth-first screen.
- Do not show the signed-in app view.
- Local mode may exist only within the current signed-out flow rules.
- No signed-in scoped workout state may be exposed.

### 2. Signed-in with cloud workout data

- Cloud wins.
- Cloud-backed workout state becomes the visible app state.
- Scoped local signed-in state does not override valid cloud workout data.

### 3. Signed-in with existing empty cloud row

- Result must be a clean empty state.
- Do not fall back to stale scoped local workout data.
- Do not fall back to another user's legacy/global state.
- Calendar must remain clean for non-primary empty users.

### 4. Signed-in with missing cloud row

Allowed fallback order:

1. scoped local signed-in state
2. explicit legacy/import fallback where intentionally allowed
3. clean empty state

This path is distinct from an existing empty cloud row.

### 5. No cross-user leakage

- No cross-user workout data leakage is allowed.
- No cross-user calendar marker leakage is allowed.
- No cross-user PIN leakage is allowed.

## State Paths

### Signed-Out First Load

Expected behavior:

- Auth overlay is shown first.
- PIN is not shown before auth resolution.
- Main app remains blocked until the signed-in path is known.
- Sync pill reflects signed-out/local mode wording.

### Signed-In Existing User with Cloud Workout Data

Expected behavior:

- Session restores.
- Bootstrap checks cloud.
- Valid cloud workout data is applied.
- User sees their own workouts and their own calendar markers.

### Signed-In User with Existing but Empty Cloud Row

Expected behavior:

- Cloud row is recognized as existing.
- Empty cloud is treated as authoritative for "no workout data yet".
- App shows a clean empty signed-in state.
- Scoped or legacy local workout state must not be used as visible fallback here.

### Signed-In User with Missing Cloud Row

Expected behavior:

- Bootstrap may use scoped signed-in local state if it exists and is valid.
- If no scoped state exists, intentional import fallback may be used only where specifically allowed.
- Otherwise app shows a clean empty state.

## Fallback Types

### Local Mode Fallback

Used when:

- user is signed out
- or cloud is unavailable and current flow allows local fallback

Requirements:

- must remain isolated from signed-in scoped state
- must not leak another user's signed-in state

### Scoped Local State Fallback

Used for signed-in users only when:

- cloud row is missing
- and valid scoped local state exists

Requirements:

- state key must be user-scoped
- no global signed-out state may be shown as signed-in state

### Legacy / Import Fallback

Used only where explicitly allowed.

Requirements:

- must not run for unrelated users
- must not leak primary state into real separate users
- must remain narrower than normal signed-in scoped state handling

## Boot Overlay Timing Expectations

- Boot overlay appears during session/bootstrap resolution.
- Signed-out users should land on auth-first flow.
- Signed-in users should not be shown stale visible state before bootstrap settles.
- Boot overlay should clear once the correct visible state is chosen.
- Timeout/failure wording should remain calm and understandable.

## Sync Pill Wording Expectations

Sync wording should match the actual state without overclaiming.

Examples of current direction:

- `Cloud synced`
- `Cloud loaded`
- `Preparing your training`
- `Connecting your cloud`
- `Using local mode`
- `Using local training`
- `Using imported training`
- `No cloud training yet`
- `Saved locally only`
- `Cloud unavailable`
- `Offline`
- `Sign in`

## Forbidden Regressions

The following are not allowed:

- PIN screen shown before auth-first flow
- stale local state shown as signed-in state before bootstrap completes
- valid cloud workout data hidden behind empty local/scoped state
- existing empty cloud row falling back to stale local workout state
- missing cloud row accidentally importing another user's data
- cross-user calendar marker leakage
- cross-user workout data leakage
- signed-out users seeing signed-in scoped state
- sync pill wording that implies cloud success when data is only local

## Manual QA Checklist

### Existing Primary User

- Sign in as the primary user.
- Confirm own workout data is visible.
- Confirm own calendar markers are visible.
- Refresh and confirm the same state is preserved.

### New/Test User

- Sign in as a real separate user.
- Confirm a clean state is shown.
- Confirm no primary workout data appears.
- Confirm no primary calendar markers appear.

### Empty Cloud Row

- Use a signed-in account with an existing empty cloud row.
- Confirm the app stays in a clean empty state.
- Confirm no stale local workout data is imported or shown.

### Missing Cloud Row

- Use a signed-in account with no cloud row.
- Confirm fallback behaves intentionally:
  - scoped local if valid
  - otherwise explicit import path if allowed
  - otherwise clean empty state

### Sign Out

- Sign out from a signed-in session.
- Confirm the app returns to the auth overlay.
- Confirm signed-in state is no longer visible.

### Refresh

- Refresh while signed in.
- Refresh while signed out.
- Confirm the correct state returns in both cases.

### Sync Pill

- Confirm sync pill wording matches the actual state:
  - cloud loaded
  - cloud synced
  - local mode
  - empty cloud
  - offline
  - blocked local-only state

## Notes

- This document is descriptive of the current baseline, not a redesign plan.
- Any future bootstrap/auth/state changes should be evaluated against these priority rules before implementation.
