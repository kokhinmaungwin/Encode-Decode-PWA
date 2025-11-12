# Advanced Encode / Decode PWA

A Progressive Web App (PWA) for encoding and decoding text quickly and easily.  
Supports Base64, URL encoding/decoding, MD5 and SHA-256 hashing, and case conversion — all offline!

## Features

- Base64 Encode & Decode  
- URL Encode & Decode  
- MD5 Hashing  
- SHA-256 Hashing  
- Convert text to UPPER or lower case  
- Copy results with one click  
- Offline-ready with Service Worker  
- Installable as a PWA on your device  

## Usage

1. Enter or paste text into the input area.  
2. Click any encoding, decoding, or hashing button to process the text.  
3. Results will show instantly below.  
4. Use the **Select & Copy** button to copy output to clipboard.  
5. Install the app via the browser prompt or install button for offline access.

## Installation

- Visit the hosted app URL or clone the repository and serve locally.  
- Use browsers that support PWAs (Chrome, Edge, Firefox Android) for full functionality.  
- When prompted, install the app to your device’s home screen for easy offline use.

## Technology

- HTML, CSS, JavaScript  
- Service Worker for offline caching  
- Web Crypto API for SHA-256 hashing  
- Custom MD5 implementation  

## Development

- Clone the repo and serve files via any static server (e.g., GitHub Pages, live-server).  
- Modify code in `index.html`, `manifest.json`, and `sw.js` as needed.

## Important Notice About Browser Cache and Offline Usage

This Progressive Web App (PWA) relies heavily on both **Service Worker cache** and **Browser cache** to deliver a seamless offline experience.

**Please be aware:**

- Clearing your **browser cache** will remove essential files (JavaScript, CSS, HTML) cached by the browser.
- While the Service Worker manages its own cache (Cache Storage), clearing the browser cache can cause some assets to become temporarily unavailable.
- This may result in errors or prevent the app from working properly when offline.
- For the best offline experience, **avoid clearing the browser cache** while using this app.
- When updates are made, the app uses cache versioning and prompts users to refresh, ensuring you always have the latest version.

If you experience issues after clearing your browser cache, try refreshing the page or reopening the app with an active internet connection.

Thank you for understanding!

## License

Open source and free to use.

---

Made with ❤️ by Khin Maung Win 
