# ⚡ SSC CGL 2026 — Personal Prep Tracker

> **140 days. 2 tiers. One shot.**  
> A self-built gamified study tracker for SSC CGL 2026, from Day 1 to exam day.

---

## What This Is

This isn't a generic study app.  
This is a war room — built for one exam, one candidate, zero excuses.

Every day has an **Operative Briefing**: a tactical prompt that tells you exactly what to study, why it matters, and how to execute. You tick off subtasks, track your streak, take quizzes, and see your weak areas surface in analytics.

---

## Tech Stack

| Layer      | Tech                              |
|------------|-----------------------------------|
| Frontend   | React 18 + Vite                   |
| Styling    | Tailwind CSS + CSS custom props   |
| Animations | Framer Motion                     |
| Auth       | Firebase Authentication           |
| Database   | Firestore (real-time progress)    |
| Hosting    | Netlify (CI/CD from GitHub)       |

---

## Features

### Dashboard
- Active day shown as **hero card** — tap to expand tasks inline
- Every subtask has a **live checkbox** — checked state saves to Firestore instantly
- Completion % shows per day (e.g. `73%`)
- STUDY SCHEDULE below shows the surrounding days — also expandable with checkboxes
- "Open full day view →" takes you to the detailed brief

### Day Detail
- Full **Operative Briefing** (the tactical daily prompt)
- Task blocks (English / GA / Quant / Reasoning) with all subtasks
- Each subtask: title, time estimate, tip, mandatory flag
- Quiz trigger for quiz-enabled days

### Quiz System
- 10-question daily quiz per day
- Score saved to Firestore with attempt history
- Weak areas calculated and surfaced in Analytics

### Analytics
- Hours studied, tasks done, days completed
- Weak subject breakdown from quiz history
- Phase progress bars

### Roadmap
- Full 140-day calendar view
- Phase 1 → Phase 5 with color-coded progress
- Completed days marked green

### Themes
4 color themes — switch from the navbar or hamburger menu:
- `shadow` — purple dark mode
- `arise` — amber warm mode
- `hunter` — green mode
- `crimson` — red mode

### Mobile
- Sticky navbar with animated hamburger menu
- Full theme switcher in mobile drawer
- All pages optimized for phone use

---

## Study Plan Structure

| Phase | Weeks | Days     | Focus                            | Daily Hours |
|-------|-------|----------|----------------------------------|-------------|
| 1     | 1–3   | 1–21     | Foundation — all subjects        | 2–3h        |
| 2     | 4–9   | 22–62    | Deep study — Tier 1 chapters     | 3–8h        |
| 3     | 8–9   | 50–61    | Tier 1 mock push                 | 2.5–8h      |
| 4     | 10–12 | 62–82    | Tier 2 foundation                | 3–8h        |
| 5     | 13–20 | 83–140   | Tier 2 deep + final mocks        | 2.5–8h      |

---

## Firebase Setup

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Authentication → Email/Password**
3. Enable **Firestore Database**
4. Paste the Firestore rules from `firestore.rules` in the Console
5. Copy your Firebase config into `.env`:

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

---

## Local Dev

```bash
npm install
npm run dev
```

---

## Deploy on Netlify

1. Push to GitHub
2. Connect repo in [app.netlify.com](https://app.netlify.com)
3. Build settings are auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish dir: `dist`
4. Add your Firebase env vars under **Site settings → Environment variables**
5. Deploy — React Router is handled by the `[[redirects]]` rule

---

## Firestore Schema

```
users/
  {uid}/
    name, username, email, createdAt, lastActiveDate
    progress/
      {dayId}/
        completedSubtasks: string[]
        dayCompleted: boolean
        completedAt: timestamp
        quizAttempts: { score, total, percentage, passed, weakAreas, attemptedAt }[]
        lastQuizAttempt: number
        bestQuizScore: number
```

---

## Progress Saved How?

Every checkbox tap calls `completeSubtask(dayId, subtaskId)` which does:

```js
setDoc(ref, { completedSubtasks: arrayUnion(subtaskId) }, { merge: true })
```

**Instant. Offline-safe (Firestore queues writes). No polling.**

Un-checking calls `uncompleteSubtask` which rewrites the array without that id.

---

## Git Setup (different local identity)

Since you may have a different global git identity, push with:

```bash
git remote add origin https://<your-username>:<your-token>@github.com/<your-username>/cgl-tracker.git
git push -u origin master
```

Get a token at: GitHub → Settings → Developer settings → Personal access tokens → Fine-grained → repo scope.

---

*Built in one session. No excuses. Exam day: June 2026.*
