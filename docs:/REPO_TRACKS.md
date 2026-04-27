# REPOSITORY TRACKS OVERVIEW

This repository contains three clearly different documentation and
development tracks.

They should not be mixed by default.

---

## 1. MVP1 / Current Working App

This is the current production-like working solution.

It is the active app.

Current source of truth:

- `index.html`

Rules:

- treat MVP1 as the live behavior baseline
- fix MVP1 directly only when the task explicitly targets the current app
- do not migrate MVP1 toward V2 unless explicitly requested
- do not assume V2 docs represent current implementation behavior

---

## 2. V2 Architecture Scaffold

This is an existing clean architecture base for future work.

It is not yet the active app.

It is not the current production baseline.

Its purpose is to:

- define long-term architecture direction
- describe clean domain and layer boundaries
- guide future implementation work beside MVP1

Primary reference:

- `docs:/V2_ARCHITECTURE.md`

Rules:

- do not treat V2 scaffold docs as current runtime behavior
- do not connect MVP1 to V2 by default
- do not refactor working MVP1 toward V2 unless explicitly requested

---

## 3. Pre-V2 Stabilization Documents

These docs exist to make MVP1 stable enough to act as the reference
baseline before serious V2 implementation starts.

Primary references:

- `docs:/PRE_V2_STABILIZATION.md`
- `docs:/PRE_V2_STABILIZATION_CHECKLIST.md`

Their purpose is to:

- define what must be stable in MVP1
- protect data integrity and real workout flows
- reduce regression risk before V2 work expands
- make the MVP1 to V2 transition explicit instead of accidental

---

## Working Rule

Until the project explicitly switches to V2 as the active app:

- MVP1 remains the source of truth
- `index.html` remains the current implementation baseline
- V2 remains a scaffold and architecture track
- stabilization docs remain support documents, not implementation
