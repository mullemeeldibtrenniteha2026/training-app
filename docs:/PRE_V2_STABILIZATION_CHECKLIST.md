# PRE-V2 STABILIZATION CHECKLIST

Use this before declaring MVP1 ready as the baseline for V2 work.

Mark each item as:

- `[ ]` not verified
- `[x]` verified
- `[-]` intentionally not in scope

---

## 1. Baseline Control

- [ ] Latest confirmed working branch or commit is named
- [ ] Stable baseline file/version is known
- [ ] Team agrees this is the reference MVP1 baseline
- [ ] Known open issues are listed separately
- [ ] No experimental file is being used as the base

---

## 2. Data Integrity

- [ ] Workout day stays correct after reload
- [ ] Date and weekday remain aligned
- [ ] Week number remains correct
- [ ] Exercise order is preserved
- [ ] Single exercises remain single exercises
- [ ] Supersets remain supersets
- [ ] Sets are preserved after edits
- [ ] Reps are preserved after edits
- [ ] Weights are preserved after edits
- [ ] Done states are preserved
- [ ] Notes are preserved
- [ ] Rest values are preserved in usable form

---

## 3. Workout Flow

- [ ] App opens normally
- [ ] Workout day selection works
- [ ] Existing workout loads correctly
- [ ] Add exercise works once without duplicate confirmation
- [ ] Add set works
- [ ] Edit reps works
- [ ] Edit weight works
- [ ] Edit rest works
- [ ] Edit notes works
- [ ] Delete set works
- [ ] Delete exercise works
- [ ] Finish workout works
- [ ] Reopening the workout shows saved state correctly

---

## 4. Timer Flow

- [ ] Timer is visible before start
- [ ] Timer remains visible while running
- [ ] Running state does not visually override timer value
- [ ] Pause works
- [ ] Resume works
- [ ] Reset works
- [ ] Rest-related usage remains understandable

---

## 5. Input Safety

- [ ] Empty reps input does not crash app
- [ ] Empty weight input does not crash app
- [ ] Empty rest input does not crash app
- [ ] Comma decimal weight input works if supported baseline expects it
- [ ] Dot decimal weight input works
- [ ] Invalid input fails safely without corrupting workout state

---

## 6. Local-First Stability

- [ ] App remains usable without cloud interaction
- [ ] Local save still works
- [ ] Reload does not drop workout data unexpectedly
- [ ] No blocking overlay appears during normal local usage

---

## 7. Protected Zones Check

- [ ] Auth flow was not changed during unrelated stabilization work
- [ ] Supabase/cloud sync was not changed unless explicitly required
- [ ] Calendar logic was not changed unless explicitly required
- [ ] Storage keys/schema were not changed unless explicitly required
- [ ] Render order/boot flow were not changed unless explicitly required

---

## 8. Release Safety

- [ ] Patch scope is narrow and reversible
- [ ] Recent changes are explained clearly
- [ ] Rollback path is known
- [ ] Manual regression was run after latest patch
- [ ] No known blocker remains for real workout use

---

## 9. Ready for V2 Decision

MVP1 is ready to act as the V2 reference baseline only if:

- [ ] baseline is explicit
- [ ] regression checklist passes
- [ ] no active data-integrity issue exists
- [ ] no active workout-blocking bug exists
- [ ] protected zones are understood
- [ ] team agrees V2 should build beside MVP1, not replace it blindly
