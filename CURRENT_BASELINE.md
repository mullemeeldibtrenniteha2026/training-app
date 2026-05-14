# Current Baseline

## Stable Baseline Summary

This repository currently uses the MVP1 `index.html` app as the active working baseline.

The current baseline is focused on:
- safe signed-in user isolation
- protected cloud persistence
- preserved workout data integrity
- clean behavior for real separate users in private beta

## Confirmed Working Features

- Auth-first boot
- PIN screen no longer appears before auth
- User-scoped PIN
- Signed-in scoped workout state
- Signed-in scoped UI selection
- Primary workout data restored and cloud-backed
- Empty local state cannot overwrite populated cloud state
- Real separate users do not see primary workout data
- Non-primary empty users see a clean calendar without default markers

## Important Data Safety Rules

- Never save empty state over populated cloud state
- Cloud is the source of truth for signed-in users
- Preserve all sets, reps, done states, supersets, and exercise order
- Do not delete localStorage or cloud data during migrations

## Testing Notes

- Gmail plus aliases are not valid multi-user tests
- Use a real separate email/account for multi-user testing

## Next Recommended Steps

- New user onboarding empty state
- Automatic backup before import/cloud overwrite
- Cleanup only after baseline is confirmed
