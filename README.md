# little-green-ballots

Source for [littlegreenballots.com](https://littlegreenballots.com): a platform for **paid votes** that influence topic charts and displays.

## Local preview

This is a static GitHub Pages site. From this folder:

```bash
python3 -m http.server 8080
```

Open http://127.0.0.1:8080/ for the landing page and http://127.0.0.1:8080/mock/ for the static chart + paid-vote UX mock.

## Overnight MVP (Issues #1 / #2)

- Landing explains product + waitlist CTA (no payment processor).
- `/mock/` is UI-only — no real charges.

Do not merge overnight PRs unless Mark says so.
