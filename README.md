# Nox Live Stream — Video player with centered ad

This repository contains a small static site sample that shows how to inject a third-party ad script centered over an HTML5 video, with a simple cookie-consent flow.

Files:
- index.html — main page (video player + ad overlay)
- styles.css — styles
- consent.js — minimal consent utility
- load-ad.js — ad loader that injects the third-party script into the overlay

Important notes
- The ad script used in this sample is: `https://pl30526720.effectivecpmnetwork.com/c1/0f/df/c10fdf3839eea455490897bba5cf49db.js`.
- Replace `/sample.mp4` and `/poster.jpg` with your media files or public URLs.
- For production, prefer setting Content-Security-Policy as an HTTP header rather than a meta tag and remove `unsafe-inline` where possible.
- Ensure you have a privacy policy and obtain consent for tracking cookies if required by law.

Deploying
- GitHub Pages: push this repo to GitHub and enable Pages from the repository settings (branch `main`, root). The site will be available at `https://<your-username>.github.io/<repo>/`.
- Vercel: connect the GitHub repo to Vercel or run `vercel --prod` in the project directory.

Local testing
- Run a simple static server in the folder:
  - Python 3: `python -m http.server 8000`
  - Node: `npx serve .`

Security & testing
- Test the network requests for the ad script in DevTools — check what domains are contacted and whether cookies are set.
- Consider loading the ad script only after explicit consent in GDPR regions.
