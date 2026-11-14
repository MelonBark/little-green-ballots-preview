# little-green-ballots

Source for [littlegreenballots.com](https://littlegreenballots.com): a platform for **paid votes** that influence topic charts and displays.

## Local preview

Static files, no build step. From this folder:

```bash
python3 -m http.server 8080
```

- Landing: http://127.0.0.1:8080/index.html
- Mock: http://127.0.0.1:8080/mock/index.html

Opening `index.html` from disk (`file://`) works too. Links point at those files, not at folders. Folder links such as `mock/` only work when the server rewrites a directory to `index.html`. VS Code Live Preview and `file://` do not, so those links used to open a directory listing or an error instead of the mock.

The same relative links work when the site is hosted in a subpath (for example `https://melonbark.github.io/little-green-ballots-preview/`).

## Waitlist form

The **Request invite** button reads one constant in [`config.js`](config.js):

```js
const WAITLIST_FORM_URL = "https://forms.office.com/REPLACE_ME";
```

Paste the Microsoft 365 Forms URL on that line. It must start with `https://forms.office.com/` and must not contain `REPLACE_ME`. Until then, the button shows “Waitlist form coming soon.” Forms collects the email address; this page does not.

## Preview site

Production GitHub Pages is the `main` branch of this repo only, and `CNAME` stays `littlegreenballots.com`.

The sprint is synced, without `CNAME`, to [little-green-ballots-preview](https://github.com/MelonBark/little-green-ballots-preview) `main`. That repo already has `.nojekyll` and Pages configured from `main` `/`, with no custom domain of its own. It is served at:

https://melonbark.com/little-green-ballots-preview/

[`.github/workflows/deploy-preview.yml`](.github/workflows/deploy-preview.yml) repeats that sync on pushes to `sprint/lgb-mvp-landing-mock` when the Actions secret `PREVIEW_DEPLOY_TOKEN` is set. The token is a fine-grained PAT with Contents read and write on the preview repo only. The workflow never copies `CNAME` and does not change the production Pages site.

Promoting the sprint to production is merging PR #3 into `main` after Mark approves. Do not merge before that.

## Overnight MVP (Issues #1 / #2)

- Landing explains the product and links to the waitlist (no payment processor).
- `mock/index.html` is UI-only — no real charges.

Do not merge overnight PRs unless Mark says so.
