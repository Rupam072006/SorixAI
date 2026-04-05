# 🎙️ SorixAI — Voice Assistant

![HTML](https://img.shields.io/badge/HTML5-Structure-orange?style=flat-square&logo=html5)
![CSS](https://img.shields.io/badge/CSS3-Styling-blue?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-Logic-yellow?style=flat-square&logo=javascript)
![Spotify](https://img.shields.io/badge/Spotify-API-1DB954?style=flat-square&logo=spotify)
![NewsAPI](https://img.shields.io/badge/NewsAPI-Live%20News-red?style=flat-square)
![Status](https://img.shields.io/badge/Status-Complete-green?style=flat-square)

A browser-based **AI Voice Assistant** that listens to your voice, understands your commands, and responds with speech — with multilingual support, real-time news, Spotify music playback, and smart web navigation.

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Live Demo](#-live-demo)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Voice Commands](#-voice-commands)
- [API Integrations](#-api-integrations)
- [How It Works](#-how-it-works)
- [KPI Questions & Answers](#-kpi-questions--answers)
- [How to Run](#-how-to-run)
- [Future Improvements](#-future-improvements)

---

## 📖 Project Overview

**SorixAI** is a fully browser-based voice assistant built with vanilla HTML, CSS, and JavaScript — no frameworks, no backend required. It uses the browser's native **Web Speech API** for both voice recognition and text-to-speech, making it lightweight and instantly deployable.

Users can speak natural language commands and SorixAI will respond by voice, open websites, search Google, fetch live news headlines, or play songs on Spotify — all hands-free.

---

## 🌐 Live Demo

> Open `index.html` directly in your browser — no server needed.  
> Works best on **Google Chrome** (full Web Speech API support).

---

## 📁 Project Structure

```
SorixAI/
│
├── index.html        # Main HTML structure
├── style.css         # Styling and layout
├── script.js         # All voice logic, commands, and API calls
├── logo.jpg          # SorixAI logo (also used as favicon)
├── mic.svg           # Microphone icon for the button
├── voice1.gif        # Animated GIF shown when speaking/listening
└── README.md         # Project documentation
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| `HTML5` | Page structure and layout |
| `CSS3` | Styling, animations, responsive design |
| `JavaScript (ES6+)` | Voice logic, command handling, API calls |
| `Web Speech API` | Voice recognition + text-to-speech (browser native) |
| `SpeechRecognition` | Captures and transcribes user's voice |
| `SpeechSynthesisUtterance` | Converts text responses to spoken audio |
| `NewsAPI` | Fetches live top news headlines |
| `Spotify Web API` | Searches and opens songs on Spotify |
| `Google Fonts` | Playfair Display font for branding |

---

## ✨ Features

- **Voice Activation** — Click the mic button and speak naturally
- **Text-to-Speech Response** — SorixAI speaks back every response
- **Time-based Greeting** — Greets with Good Morning / Afternoon / Evening on load
- **Multilingual Support** — Switch between English (US), Hindi, and Marathi
- **Live News** — Fetches and reads top 5 headlines via NewsAPI
- **Spotify Integration** — Searches and opens any song on Spotify
- **Smart Web Navigation** — Opens YouTube, Google, WhatsApp, Instagram, LinkedIn, GitHub, Facebook, Twitter by voice
- **Google Search** — "What is..." and "Who is..." trigger live Google searches
- **Date & Time** — Tells current time and date on request
- **Chat History** — All user commands logged in a scrollable chat panel
- **Animated GIF** — Voice wave animation plays while speaking or listening

---

## 🗣️ Voice Commands

| Command | Action |
|---|---|
| `"Hello"` / `"Hi"` / `"Hey"` | SorixAI greets you back |
| `"Who are you"` | SorixAI introduces itself |
| `"What time is it"` / `"Current time"` | Speaks the current time |
| `"What is the date"` / `"Current date"` | Speaks today's date |
| `"Open YouTube"` | Opens YouTube in a new tab |
| `"Open Google"` | Opens Google in a new tab |
| `"Open WhatsApp"` | Opens WhatsApp Web in a new tab |
| `"Open Instagram"` | Opens Instagram in a new tab |
| `"Open Facebook"` | Opens Facebook in a new tab |
| `"Open Twitter"` | Opens Twitter in a new tab |
| `"Open LinkedIn"` | Opens LinkedIn in a new tab |
| `"Open GitHub"` | Opens GitHub in a new tab |
| `"Who is [name]"` | Searches Google for that person |
| `"What is [topic]"` | Searches Google for that topic |
| `"News update"` / `"Latest news"` | Reads top 5 live news headlines |
| `"Play [song name]"` | Searches and opens song on Spotify |

---

## 🔌 API Integrations

### 1. NewsAPI
- **Endpoint:** `https://newsapi.org/v2/top-headlines?country=us`
- **Usage:** Fetches top 5 US news headlines and reads them aloud
- **Get your key:** [newsapi.org](https://newsapi.org/)
- **Setup:** Replace the `apiKey` in `script.js`:
```javascript
const apiKey = 'YOUR_NEWSAPI_KEY';
```

### 2. Spotify Web API
- **Usage:** Searches for a song by name and opens the track in Spotify
- **Flow:** Gets client credentials token → searches track → opens Spotify URL
- **Get your credentials:** [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
- **Setup:** Replace in `script.js`:
```javascript
const clientId = 'YOUR_SPOTIFY_CLIENT_ID';
const clientSecret = 'YOUR_SPOTIFY_CLIENT_SECRET';
```

> ⚠️ **Security Note:** Never expose API keys and client secrets in public repositories. Move them to environment variables or a backend proxy before deploying publicly.

---

## ⚙️ How It Works

```
User clicks mic button
        ↓
SpeechRecognition starts listening
        ↓
User speaks a command
        ↓
Transcript captured → displayed in button text
        ↓
Command logged to chat history panel
        ↓
takeCommand() matches the transcript
        ↓
        ├── Open website → window.open()
        ├── Greet / answer → speak()
        ├── Time / Date → JS Date object → speak()
        ├── News → NewsAPI fetch → speak headlines
        ├── Play song → Spotify API → window.open(trackUrl)
        └── Google search → window.open(google search URL)
        ↓
SpeechSynthesisUtterance speaks the response
        ↓
voice1.gif animates while speaking
        ↓
Ready for next command
```

---

## ❓ KPI Questions & Answers

**Q1. What is SorixAI and what problem does it solve?**
> SorixAI is a browser-based voice assistant that lets users interact with their computer entirely hands-free. It eliminates the need to type commands by accepting natural language voice input and responding with speech — useful for accessibility, multitasking, and quick information retrieval.

**Q2. What technologies are used and why no framework?**
> SorixAI is built with pure HTML, CSS, and JavaScript — no React, no Node.js, no backend. This makes it zero-dependency, instantly runnable by opening a single HTML file, and extremely lightweight. The Web Speech API is natively supported in modern browsers, eliminating any need for external speech libraries.

**Q3. How does voice recognition work in this project?**
> The browser's `SpeechRecognition` API (or `webkitSpeechRecognition` for Chrome) captures the microphone input, transcribes it to text in real time, and passes it to `takeCommand()`. The language of recognition switches dynamically based on the dropdown selection (English, Hindi, Marathi).

**Q4. How does multilingual support work?**
> Both `SpeechRecognition` and `SpeechSynthesisUtterance` accept a `lang` property. When the user selects a language from the dropdown, both the recognition (input) and synthesis (output) language are updated dynamically — so SorixAI can both understand and respond in Hindi or Marathi.

**Q5. How does the Spotify integration work?**
> When the user says "Play [song name]", SorixAI first calls the Spotify Accounts API with the client credentials grant to get a temporary access token. It then uses that token to search the Spotify Tracks API for the song, retrieves the Spotify URL of the top result, and opens it in a new browser tab while announcing the song name and artist.

**Q6. How are live news headlines fetched?**
> When the user says "news update" or "latest news", SorixAI calls the NewsAPI `/top-headlines` endpoint for the US, takes the first 5 article titles from the response, joins them into a single string, and passes them to the `speak()` function — reading them aloud one after another.

**Q7. How does the time-based greeting work?**
> On page load, `wishme()` is called. It reads the current hour using `new Date().getHours()` — if it's 0–11 it says "Good Morning", 12–15 is "Good Afternoon", and 16+ is "Good Evening". This plays automatically every time the page is opened.

**Q8. How is the chat history implemented?**
> Every time the user speaks, `appendMessage("User", transcript)` creates a new `<div>` element with the transcribed text and appends it to the `#chat-container` div. The container auto-scrolls to the bottom using `scrollTop = scrollHeight` so the latest message is always visible.

**Q9. What happens when SorixAI doesn't understand a command?**
> The `takeCommand()` function's final `else` branch catches any unrecognized input and calls `speak("Sorry, I didn't understand that.")` — giving the user clear feedback without crashing or silently failing.

**Q10. How can this project be extended or deployed?**
> SorixAI can be deployed on GitHub Pages with zero configuration since it's pure static HTML. Extensions could include adding a backend proxy to hide API keys, integrating more APIs (weather, calendar), adding a wake word so users don't need to click the button, or persisting chat history using localStorage.

---

## ▶️ How to Run

### Option 1 — Open directly (simplest)
```
1. Download or clone the repository
2. Open index.html in Google Chrome
3. Allow microphone access when prompted
4. Click the mic button and speak!
```

### Option 2 — Clone via Git
```bash
git clone https://github.com/your-username/sorixai.git
cd sorixai
# Open index.html in Chrome
```

### Option 3 — Deploy on GitHub Pages
```
1. Push the repo to GitHub
2. Go to Settings → Pages
3. Set source to main branch / root
4. Your app will be live at: https://your-username.github.io/sorixai
```

> ⚠️ **Browser Compatibility:** Use **Google Chrome** for full Web Speech API support. Firefox has limited support and Safari may not work.

---

## 🚀 Future Improvements

- Add a wake word ("Hey Sorix") so mic activates without clicking
- Move API keys to a backend proxy for security
- Add weather API integration ("What's the weather today?")
- Add calculator ("What is 25 times 4?")
- Persist chat history using localStorage
- Add more languages (Tamil, Telugu, Bengali, etc.)
- Add dark/light mode toggle
- Show SorixAI's spoken responses in the chat panel too (not just user messages)

---

## 👤 Author

**Team SorixAI**
- Project: SorixAI — Browser-based Voice Assistant
- Tools: HTML, CSS, JavaScript, Web Speech API, NewsAPI, Spotify API

---

> ⭐ If you found this project helpful, give it a star on GitHub!
