# QA Current Baseline

## Purpose

This checklist is the current manual QA pass for the MVP1 `index.html` baseline.

Use this before calling the current auth/sync/onboarding baseline stable for wider real-user testing.

## Test Setup

- Use the current live app or current local baseline build.
- Test with:
  - one real primary user account
  - one real separate test user account
- Do not use Gmail plus aliases as multi-user tests.
- Run at least one pass on a mobile-width viewport.

## Manual QA Checklist

### 1. Signed-Out First Load

- Open the app while signed out.
- Confirm the auth overlay is the first visible screen.
- Confirm the PIN screen does not appear before auth.
- Confirm the main app is blocked behind auth.

### 2. Sign In Existing Primary User

- Sign in with the primary user account.
- Confirm the app loads into the signed-in state.
- Confirm the primary user's workout data is visible.
- Confirm the primary user's calendar markers are visible.
- Confirm the sync pill shows a cloud-loaded/synced state rather than local-only mode.

### 3. Refresh After Sign-In

- Refresh while still signed in as the primary user.
- Confirm the session restores correctly.
- Confirm the same workout data remains visible.
- Confirm the same calendar markers remain visible.

### 4. Cloud Loaded State

- Sign in as an account with existing cloud workout data.
- Confirm cloud-backed workout state appears after bootstrap.
- Confirm there is no brief stale empty fallback state that remains visible.
- Confirm existing exercises, sets, done states, supersets, dates, and week numbers are preserved.

### 5. Sign Out

- Click `Sign out`.
- Confirm the app returns to the auth-first screen.
- Confirm the signed-in app view is no longer visible.
- Confirm signed-out local mode does not expose signed-in scoped data.

### 6. Sign In New/Test User

- Sign in with a real separate user account on the same browser/device.
- Confirm no primary workout data appears.
- Confirm no primary calendar markers appear.
- Confirm the user starts from a clean empty state.

### 7. Empty Cloud Row State

- Use a signed-in account with no workout data in cloud and no valid scoped local state.
- Confirm the result is a clean empty state.
- Confirm there is no fallback to another user's stale local state.
- Confirm the sync pill does not imply cloud data was loaded when there is none.

### 8. Local Mode Fallback

- Test signed-out/local behavior.
- Confirm local mode remains isolated from signed-in scoped state.
- If cloud is unavailable or slow, confirm the app falls back cleanly without exposing another user's data.

### 9. PIN Creation Per User

- Sign in as a user with no existing device PIN.
- Confirm the user can create their own 4-digit PIN.
- Confirm this does not reuse another user's PIN.

### 10. PIN Unlock Per User

- Lock/reopen the app for a user who already created a PIN.
- Confirm the correct user PIN unlocks.
- Confirm a different user's PIN is not accepted for this account scope.

### 11. New-User First Workout CTA

- Sign in as a clean new/test user with no workout data.
- Confirm the polished empty state is shown.
- Confirm the `Add first workout` CTA is visible.
- Confirm the CTA scrolls/focuses the existing add exercise flow.

### 12. Add First Exercise

- From the clean empty state, add the first exercise.
- Confirm the workout day is created from real user input only.
- Confirm no fake or demo data appears.

### 13. Calendar Markers

- For the primary user, confirm real workout markers still appear correctly.
- For a clean non-primary signed-in user, confirm default program markers do not appear.
- After the non-primary user creates real workout data, confirm only their own real markers appear.

### 14. Search Empty State

- Use search on a day with no matching exercises.
- Confirm the search empty state appears.
- Confirm it does not break the signed-in clean empty-state flow.

### 15. Workout Mode Entry

- Enter workout mode on a day with workout data.
- Confirm workout mode opens normally.
- Confirm no auth/sync/onboarding changes affect workout execution.

### 16. Finish Workout Flow

- Start a workout and trigger the finish flow.
- Confirm the finish confirmation still appears.
- Confirm the finish summary still works.
- Confirm done-state behavior remains correct.

### 17. Mobile Viewport

- Repeat the key flows on a mobile-width viewport:
  - signed-out first load
  - primary sign-in
  - clean new user sign-in
  - first-workout CTA
  - add first exercise
  - workout mode entry
- Confirm spacing, CTA visibility, and auth-first behavior remain usable on mobile.

## Pass Criteria

The current baseline is ready for the next safe iteration only if:

- auth-first entry remains stable
- primary user data remains intact
- separate users remain isolated
- clean new users remain clean
- no cross-user calendar marker leakage appears
- workout execution remains unchanged

## If A Bug Is Found

- Stop the QA pass.
- Record exact reproduction steps.
- Record which account type was used:
  - primary user
  - real separate user
  - signed-out local mode
- Record whether the issue happened:
  - on first load
  - after refresh
  - after sign-out/sign-in
  - after cloud bootstrap
- Do not patch automatically until the bug is isolated.
