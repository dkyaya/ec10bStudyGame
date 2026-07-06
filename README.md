# Econ 10b Study Game

A small, static, no-build quiz game for studying Econ 10b (intermediate macroeconomics) concepts.

## Project structure

```
index.html          entry point (must stay at repo root for GitHub Pages)
styles/main.css      styles
src/app.js           game logic
data/questions.json  quiz questions
```

The app is plain HTML/CSS/JS with no backend and no build step — open `index.html`
in a browser or serve the folder with any static file server.

## Running locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Deploying with GitHub Pages

1. Go to the GitHub repo: https://github.com/dkyaya/ec10bStudyGame
2. Open **Settings → Pages**.
3. Under "Build and deployment", choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/root`
4. Save.
5. The site will become available at:
   https://dkyaya.github.io/ec10bStudyGame/
