# TIMO TRAINING APP --- V2 ARCHITECTURE BLUEPRINT

## STATUS

This document describes the **V2 architecture scaffold**.

It is not the active app implementation.

It is not the current production-like baseline.

The current source of truth remains MVP1 in `index.html` until the
project explicitly switches to V2.

## PURPOSE

Build a long-term, production-quality training system with strong data
integrity, scalability, and clean architecture.

## CORE PRINCIPLES

-   Domain is source of truth
-   Separation of concerns
-   No hidden logic
-   Predictable behavior
-   Data integrity first

## DOMAIN MODEL

WorkoutPlan → TrainingWeek → WorkoutDay → ExerciseEntry → SetEntry

Superset is first-class structure.

## ARCHITECTURE LAYERS

Domain / Use-cases / State / UI / Services / Adapters

## FILE STRUCTURE

/v2 with src folders for domain, usecases, state, ui, services, adapters

## DEVELOPMENT STRATEGY

Build V2 beside MVP1. Start read-only. Add features gradually.

## MILESTONES

M0 Scaffold M1 Read-only M2 Validation M3 Editing M4 Storage M5 Workout
Mode M6 Cloud M7 Import

## VALIDATION RULES

-   date/weekday alignment
-   superset integrity
-   set completeness
-   done states

## FINAL RULE

System must allow future features without breaking behavior.
