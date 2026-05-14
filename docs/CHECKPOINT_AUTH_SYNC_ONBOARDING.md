# Auth / Sync / Onboarding Checkpoint

## Summary

This checkpoint captures the current production-like MVP1 state after the recent auth, sync, state-isolation, and new-user onboarding stabilization work.

The active implementation baseline remains `index.html`.

## Confirmed Working

- Auth-first flow is working.
- The PIN screen no longer appears before auth.
- PIN is user-scoped per signed-in user.
- Cloud/local bootstrap priority is clarified.
- An empty cloud row no longer falls back to stale local state.
- New signed-in users get a clean empty state.
- A first-workout CTA exists for signed-in users with no workout data.
- Sync/auth wording was polished for calmer, clearer product messaging.
- Empty-state visual polish was added for signed-in clean-empty users.

## Current State Rules

- Signed-in users use scoped workout state and scoped UI selection.
- If a valid cloud row exists, cloud wins.
- Signed-out local mode remains separate from signed-in scoped state.
- Empty local state must not overwrite a populated cloud row.
- Real separate users must not see another user's workout data or calendar markers.

## Latest Manual Test Checklist

1. Signed out initial load:
   - Auth overlay is shown first.
   - PIN is not shown first.
2. Existing primary user sign-in:
   - Own workout data loads.
   - Own calendar markers load.
   - Cloud-backed state is visible.
3. Existing primary user refresh:
   - Signed-in state remains correct.
   - Own data remains visible.
4. Real separate user sign-in on the same browser:
   - No primary workout data appears.
   - No primary calendar markers appear.
   - Clean empty state is shown.
   - First-workout CTA is visible.
5. New user first action:
   - `Add first workout` scrolls to the existing add exercise flow.
6. Cloud safety:
   - Empty local state does not overwrite populated cloud state.
7. Signed-out state:
   - App returns to auth-first flow.
   - Signed-out local mode remains isolated.

## Protected Zones

These areas should not be touched casually:

- Auth-first boot flow
- User-scoped PIN flow
- Signed-in scoped workout state
- Signed-in scoped UI selection
- Cloud bootstrap priority
- Empty cloud overwrite guard
- Workout data model
- Set flow and done-state behavior
- Superset handling
- Calendar date calculations
- Render boundaries in MVP1 `index.html`

## Recommended Next Safe Iteration

The next safest iteration is a narrow UX improvement around first-use clarity only, such as:

- a small signed-in empty-state hint near the add exercise area
- a lightweight confirmation or save-state explanation after first workout creation
- documentation and test-pass tightening around cloud/local recovery paths

Avoid any broad refactor, render extraction, auth rewrite, or state-management rewrite until this baseline remains stable through repeated real-user testing.
