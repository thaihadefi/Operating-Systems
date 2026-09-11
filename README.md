# Operating Systems - Responsive Video Lecture & Course Platform

[![JavaScript](https://img.shields.io/badge/Language-JavaScript%20ES6+-F7DF1E?style=flat-square&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/Frontend-HTML5-E34F26?style=flat-square&logo=html5)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/Styling-CSS3-1572B6?style=flat-square&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

Operating Systems (IT007) is a responsive, web-based video lecture and syllabus management platform for the Operating Systems course at UIT VNUHCM, taught by MSc. Phan Dinh Duy and MSc. Tran Hoang Loc. Designed with an authentic YouTube Watch and Playlist cinema layout, the application organizes 96 course lectures across 9 core modules to deliver a seamless learning experience featuring client-side playback tracking, automatic timestamp resumption, instant syllabus search, filter chips, keyboard shortcuts, and responsive viewports without requiring user login or backend servers.

---

## Key Features

### Playback & Video Player Integration
- **YouTube IFrame Player Integration:** Programmatic playback control and state synchronization (`PLAYING`, `PAUSED`, `ENDED`) powered by the YouTube IFrame Player API (`app.js`).
- **Smart Timestamp Resumption:** Automatically tracks playback positions in `localStorage` (`it007_time_<videoId>`) and resumes at the exact second upon re-opening (`app.js`).
- **Cinema Mode 16:9 Container:** Authentic YouTube watch container with responsive 16:9 aspect ratio and dark theme surfaces (`index.html`, `style.css`).
- **Continuous Auto-Next Playback:** Continuous learning toggle transitioning automatically to the next syllabus lecture upon video completion (`app.js`).
- **Direct YouTube Attribution:** Quick action button opening the active lecture directly on YouTube, with per-lecture instructor channel names shown on every playlist row (`index.html`, `app.js`).

### Course Navigation & Syllabus Organization
- **Structured Modular Syllabus:** Complete curriculum covering 96 official lectures organized across 9 core course modules, defined in the `CHAPTERS_DATA` catalog (`app.js`).
- **Interactive Chapter Accordion:** Expandable chapter accordion panels with lecture progress counters, completion mini-bars, and global expand/collapse controls (`app.js`, `style.css`).
- **Instant Search Engine:** Real-time search across lecture numbers (e.g., `5.4`, `1.2`), video titles, chapter titles, and chapter concept descriptions (`Banker`, `Mutex`, `Semaphore`, `FCFS`, `Paging`) (`app.js`).
- **Playlist Filter Chips:** Multi-mode playlist views allowing students to filter between All, Unwatched, and Watched lectures (`app.js`, `style.css`).
- **Lecture & Chapter Duration Display:** Real per-video runtime badges (`MM:SS` / `HH:MM:SS`) and a total watch-time summary per chapter, sourced from actual YouTube video metadata (`app.js`).

### Progress Tracking & Client Persistence
- **Client-Side LocalStorage Persistence:** Zero-login architecture persisting watched lectures (`it007_watched_ids`), timestamps, active video, and accordion state locally (`app.js`).
- **Course Completion Metrics:** Real-time navigation bar progress pill visualizer displaying total completed videos, overall percentage, and a dynamic progress bar (`app.js`, `style.css`).
- **Manual Completion Toggle:** Interactive pill button allowing students to mark lectures as complete or uncomplete with dynamic icon state transitions (`app.js`).
- **Progress Reset Safeguard:** Action button with confirmation alert to clear progress, time milestones, and restore default course state (`app.js`).

### User Interface & Controls
- **YouTube Dark Theme Aesthetics:** Design system utilizing `#0f0f0f` base surfaces, `#272727` cards & borders, `#212121` raised panels, and typography powered by Google Fonts (`Roboto` and `JetBrains Mono`) (`style.css`).
- **Keyboard Shortcuts Navigation:** Desktop hotkeys for keyboard-first studying: Space (Play/Pause), N (Next), P (Previous), Left/Right (Seek 5s), and F (Fullscreen) (`app.js`).
- **Shareable Link Generation:** One-click share button copying current video URL with active timestamp to clipboard alongside toast notification alerts (`app.js`).
- **Responsive Cinema Layout:** Dual-column desktop watch layout gracefully adapting to a single-column stacked view on mobile and tablet screens (`style.css`).

---

## Technology Stack

- **Frontend & Core:** Pure Vanilla JavaScript (ES6+), HTML5 Semantic Elements.
- **Styling & Design System:** Pure Vanilla CSS3, CSS Custom Properties, Responsive Grid/Flexbox layouts, Google Fonts (`Roboto`, `JetBrains Mono`).
- **Video Player Engine:** YouTube IFrame Player API (Google Developers).
- **Data & Storage:** In-app course catalog (`CHAPTERS_DATA` in `app.js`), Browser `localStorage` API (Zero-login persistence).

---

## Project Structure

```text
Operating-Systems/
├── app.js                            # App logic, course catalog (CHAPTERS_DATA), YouTube API integration, & state engine
├── index.html                        # Single-page application markup & YouTube Watch layout
├── style.css                         # Dark theme design system & responsive stylesheet
├── vercel.json                       # Vercel deployment configuration
├── .gitignore                        # Git untracked file ignore rules
├── LICENSE                           # MIT License
└── README.md                         # Project documentation
```

---

## Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Node.js or Python for local HTTP serving

### Quick Start

```bash
# Clone the repository
git clone https://github.com/thaihadefi/Operating-Systems.git
cd Operating-Systems

# Run with Node.js (npx serve)
npx serve .

# Or run with Python 3
python3 -m http.server 8000
```

Open `http://localhost:8000` in your browser, or open `index.html` directly.

---

## Authors & Acknowledgments

- **Course:** Operating Systems (IT007) - UIT VNUHCM
- **Instructors:** MSc. Phan Dinh Duy and MSc. Tran Hoang Loc

---

## License

This project is licensed under the [MIT License](LICENSE).
