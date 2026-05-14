# 🧠 Timo Training

A focused, mobile-first training app designed for clarity, consistency, and real progress.

Built as a lightweight PWA with a clean UX and real-world usability in mind — not just tracking, but helping you stay in flow during workouts.

---

## Repository Tracks

This repo currently contains **two separate product tracks** plus a
stabilization documentation track.

### 1. MVP1 / current working app

This is the current production-like working solution.

- Source of truth is the current working [`index.html`](./index.html)
- This is the active app behavior baseline
- Bug fixes and narrow UX patches should assume MVP1 unless explicitly
  told otherwise
- MVP1 must not be migrated or refactored into V2 implicitly

### 2. V2 architecture scaffold

This is a separate architecture base for future development.

- It is **not** the active app
- It is **not** the current production baseline
- It must not be treated as the implementation source of truth
- It exists to guide future clean architecture work beside MVP1

See:

- [Repo Tracks Overview](./docs:/REPO_TRACKS.md)
- [V2 Architecture Blueprint](./docs:/V2_ARCHITECTURE.md)

### 3. Pre-v2 stabilization documents

These docs define what MVP1 must stabilize before V2 becomes practical.

See:

- [Pre-V2 Stabilization Plan](./docs:/PRE_V2_STABILIZATION.md)
- [Pre-V2 Stabilization Checklist](./docs:/PRE_V2_STABILIZATION_CHECKLIST.md)
- [Current Baseline](./CURRENT_BASELINE.md)

Until an explicit switch is made, **MVP1 remains the source of truth**.

---

## 🚀 Live

https://mullemeeldibtrenniteha2026.github.io/training-app/

---

## ✨ Core Features

- 📅 Weekly training planning
- 🏋️ Exercise tracking with sets, reps, and weights
- ⏱ Built-in timer for rest periods
- 🧠 Muscle balance radar (Day / Week / Lifetime)
- 🔄 Cloud sync (Supabase)
- 📲 Installable as a mobile app (PWA)
- 🔒 Local autosave

---

## 🎯 Design Principles

- Clarity over complexity  
- Speed over features  
- Focus over noise  

Designed to reduce friction during workouts.

---

## 🧩 Tech Stack

- HTML / CSS / JavaScript  
- Supabase  
- GitHub Pages  
- PWA (manifest + icons)

---

## 🧠 Why I Built This

Most training apps are overloaded or slow.

This one is built for one thing:

**Stay focused and train without friction.**

---

## 🔄 Roadmap

- Improve workout mode  
- Better timer UX  
- More data insights  

---

## 👤 Author

**Timo Anis**  
Product Owner & Professional Motorsport Photographer

---

## V2 Architecture

This project is evolving into a V2 version with a clean, long-term architecture.

The goal is to build a reliable, scalable training system with:
- clear domain model (workouts, exercises, sets)
- strict data integrity
- separated layers (domain, state, UI, services)
- predictable behavior in real workout usage

👉 Full architecture blueprint:
[docs:/V2_ARCHITECTURE.md](./docs:/V2_ARCHITECTURE.md)
