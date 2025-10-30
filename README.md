# XSS Security Lab (Frontend + Backend)

Deliberately vulnerable XSS lab with side-by-side panels:
- Left: Vulnerable (Stored/Reflected/DOM XSS)
- Right: Protected (escaped + safe DOM APIs)

## Project Structure
- `index.html` — UI and client scripts
- `server.js` — Minimal Express API for comments
- `package.json` — Scripts to run backend

## Quick Start
1) Install dependencies
```
npm install
```
2) Run backend
```
npm start      # or: npm run dev
```
3) Open `index.html` in your browser.
   - If backend runs on another machine, edit in `index.html`:
```
const BACKEND_URL = "http://<YOUR-IP>:3000";
```

## API
- GET `/comments` — list comments
- POST `/comments` — add comment `{ name, email, comment }`
- DELETE `/comments` — clear all comments

## Notes
- Intended for education. Do not deploy as-is to production.
- To allow other LAN devices, ensure your firewall allows port 3000.
