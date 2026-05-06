# V2 Render Boundary Progress

This checkpoint tracks the low-risk V2 extraction work completed so far.

## Current Architecture Status

- `index.html` remains the runtime shell.
- Render ownership has **not** moved to V2.
- V2 files are adapter/boundary helpers only.
- Event wiring remains in `index.html`.
- The data model remains unchanged.
- Supersets, set order, and done states must be preserved.

## Completed Steps

### Step 11
- Metrics render boundary
- Extracted pure metrics markup building only

### Step 12
- Calendar day-cell render boundary
- Extracted pure day-cell markup builder only

### Step 13
- Workout header render boundary
- Extracted static workout header shell markup only

### Step 14
- Workout container render boundary
- Extracted workout wrapper/container composition only

### Step 15
- Grouping helpers already present
- Read-only grouping helpers for superset/single grouping decisions

### Step 16
- Exercise shell render boundary
- Extracted outer exercise card wrapper only

### Step 17
- Exercise details render boundary
- Extracted details section markup string only

### Step 18
- Exercise compare render boundary
- Extracted compare/last-time markup string only

### Step 19
- Exercise actions render boundary
- Extracted action button markup string only

### Step 20
- Set read-only helpers
- Extracted display/value accessors only

### Step 21
- Single set markup boundary
- Extracted one set-row markup builder only

### Step 22
- Sets container boundary
- Extracted wrapper around prebuilt set rows only

### Step 24
- Workout set-first layout
- In workout mode, set rows are composed before quieter secondary info

### Step 25
- Destructive action safety
- Delete set uses hold-to-delete
- Delete exercise uses confirm prompt

### Step 26
- Workout action hierarchy
- Primary and destructive workout actions were visually separated

### Step 27
- Finish confirmation
- Finish action now confirms before calling existing finish logic

### Step 28
- Zero-friction set input
- Added keyboard/mobile advance flow and new-set focus restoration

### Step 29
- Workout focus hierarchy
- Workout mode visually emphasizes set rows over secondary info

## Verified Ownership Boundaries

- `renderExercises()` is still owned by `index.html`
- set iteration is still in `index.html`
- superset composition is still in `index.html`
- finish logic is still in `index.html`
- delete/add/done logic is still in `index.html`

## Step 28 Input Flow Checkpoint

Current implemented flow is:

- `reps` -> same set `kg`
- `kg` -> next set `reps`
- if there is no next set, `kg` Enter/Done adds a new set and focuses the new set `reps`

This means the current workout input flow is **reps -> kg -> next reps**, not `kg -> reps -> next kg`.

That behavior matches the currently implemented Step 28 logic, but it is the reverse of the left-to-right visual field order in the row (`kg`, then `reps`).

If the intended long-term workout flow should be:

- `kg` -> `reps`
- `reps` -> next set `kg`

that should be handled as a separate higher-attention polish step, not bundled into low-risk boundary work.

## Future High-Risk Zones

- superset render extraction
- set iteration extraction
- event extraction from `index.html`
- state management extraction
- mutation logic extraction

These zones should stay out of low-risk polish passes unless the project explicitly chooses a higher-risk migration step.
