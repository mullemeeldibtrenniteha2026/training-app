# PRE-V2 STABILIZATION PLAN

## Purpose

This document defines what must be stabilized in MVP1 before starting
meaningful V2 build work.

The goal is not to redesign the app.

The goal is to reduce regression risk, lock down real-world behavior,
and create a safe baseline for V2 extraction later.

This follows **Timo Training Agent v3**:

- stability over cleverness
- one iteration = one zone
- preserve data exactly
- do not refactor protected zones casually

---

## Why Pre-V2 Stabilization Matters

V2 will be much safer if MVP1 first becomes a reliable reference app.

Without a stable MVP1 baseline, V2 work becomes risky because:

- bugs may be copied into the new architecture
- expected behavior is left undocumented
- regression checks become subjective
- data integrity issues are harder to catch
- migration/import decisions become guesswork

Pre-v2 stabilization gives the project a controlled handoff point:

- stable behavior
- known risks
- protected flows
- manual regression checklist
- clear separation between “still stabilizing MVP1” and “start V2”

---

## Stabilization Scope

This phase is intentionally narrow.

Allowed:

- bug fixes that remove friction in real workout usage
- small UI fixes that improve reliability and clarity
- documentation of expected behavior
- regression checklist creation
- naming risky zones before V2

Not allowed:

- large refactors
- schema changes
- storage key changes
- auth rewrite
- cloud sync rewrite
- calendar rewrite
- modularization for its own sake
- “cleanup” that changes working behavior

---

## Stabilization Targets

### 1. Baseline Definition

Before V2 starts, there must be one explicitly confirmed MVP1 baseline:

- latest confirmed working branch or commit
- known working deployment target
- known manual flows that pass
- known unresolved issues list

If the baseline is unclear, V2 should not start.

### 2. Workout Data Integrity

These behaviors must be preserved and verified:

- workout day remains correct
- date and weekday stay aligned
- week number stays correct
- exercise order is preserved
- single vs superset structure is preserved
- sets are not dropped
- reps are not dropped
- weights are not dropped
- done states are not dropped
- rest values stay interpretable

### 3. Core Workout Flows

The app must remain dependable during normal training use:

- open app
- select workout day
- load workout
- add exercise
- add set
- edit reps / weight / rest / notes
- mark set done
- delete set
- delete exercise
- finish workout
- reopen workout and see preserved data

### 4. Timer Reliability

The timer is a workout-critical helper and should be treated as a
stability zone, not just visual polish.

Must remain reliable for:

- start
- pause
- resume
- reset
- visibility while running
- rest-related usage without confusing formatting

### 5. Add/Edit UX Safety

Input flows should not contain avoidable friction that creates user
hesitation or duplicate actions.

Examples of stabilization-worthy issues:

- duplicate confirmation steps
- confusing input formatting
- fields that hide important values
- controls that visually fight with each other

### 6. Local-First Safety

Even if cloud features exist, MVP1 must remain safe in local usage:

- app loads without crashing
- workout state remains usable
- save behavior does not silently discard edits
- empty or invalid input does not break the screen

### 7. Protected Zones Documentation

Before V2 starts, these zones should be explicitly treated as protected:

- auth flow
- sign in / sign out
- Supabase session handling
- cloud sync
- boot flow
- overlays
- calendar logic
- date alignment
- storage and migration
- workout completion flow
- data normalization

The goal is not “never change”.
The goal is “do not casually change during stabilization”.

---

## What “Stable Enough for V2” Means

MVP1 is stable enough for V2 when all of the following are true:

1. The working baseline is named and agreed.
2. The main workout flows pass manual regression.
3. Known high-risk zones are documented.
4. No active bug is causing data loss or workout-day corruption.
5. No active bug is blocking normal training use.
6. Rest, timer, add exercise, set editing, and workout persistence are
   behaving predictably.
7. A manual checklist exists and is used before merging MVP1 patches.

---

## Recommended Pre-V2 Work Order

1. Confirm baseline branch/commit.
2. Freeze broad refactors.
3. Fix only narrow real-world workout blockers.
4. Document expected behavior for critical flows.
5. Run and refine the manual regression checklist.
6. Mark unresolved risks clearly.
7. Start V2 architecture work beside MVP1, not by rewriting MVP1.

---

## Exit Criteria

Pre-v2 stabilization can be considered complete when:

- MVP1 has a clearly identified stable baseline
- no known blocker remains in core workout usage
- no known issue threatens data integrity
- manual regression checklist is documented
- recent patches are narrow and reversible
- the team can describe what V2 must preserve

---

## Relationship to V2

This stabilization phase is not a detour.

It creates the reference behavior V2 must match or intentionally
replace.

V2 should use MVP1 stabilization output as:

- behavior reference
- regression reference
- flow inventory
- data integrity guardrail
- release confidence tool

See:

- `AGENT.md`
- `docs:/AGENT_v3.md`
- `docs:/V2_ARCHITECTURE.md`
- `docs:/PRE_V2_STABILIZATION_CHECKLIST.md`
