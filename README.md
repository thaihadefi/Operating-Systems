# Operating Systems (IT007) - Video Lectures

A web-based video lecture player and syllabus tracker for the Operating Systems course (IT007) at UIT VNUHCM, taught by MSc. Phan Dinh Duy and MSc. Tran Hoang Loc.

Organizes 96 course lectures across 9 chapters with progress tracking, timestamp resumption, search, and keyboard navigation.

## Features

- **YouTube Player Integration**: Playback synchronization, resume from saved timestamp, and optional auto-play next lecture.
- **Syllabus & Search**: 9 chapters with lecture list, real-time search across titles/topics, and watched/unwatched filters.
- **Progress Tracking**: Automatic completion detection (upon lecture completion or at 90% playback), instant visual checkmarks without page reload, and localStorage persistence without requiring an account.
- **Keyboard Shortcuts**: `Space` (Play/Pause), `N` (Next), `P` (Previous), `←`/`→` (Seek 5s), `F` (Fullscreen).

## Project Structure

```text
Operating-Systems/
├── app.js          # Player logic, course data, and state management
├── index.html      # Main page layout
├── style.css       # Styles
├── vercel.json     # Vercel deployment configuration
└── README.md
```

## Getting Started

Open `index.html` directly in a browser, or serve locally:

```bash
# Using Python
python3 -m http.server 8000

# Or using npx
npx serve .
```

## Acknowledgments

- Course: IT007 - Hệ điều hành (UIT - VNUHCM)
- Instructors: MSc. Phan Dinh Duy, MSc. Tran Hoang Loc

## License

[MIT](LICENSE)
