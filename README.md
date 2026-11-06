# PhotoEnhancerPro

Fast browser-based photo enhancement with bulk upload, background processing, before/after comparison, downloads, and sharing.

## Features

- Bulk upload and sequential processing
- Background AI-style enhancement for clarity, sharpness, brightness, contrast, and color
- Natural clarity, crisp detail, and max resolution presets
- Interactive before/after slider
- JPEG, JPG, PNG, WEBP, and PDF downloads
- Direct sharing and batch download

## Run locally

Open `index.html` in a browser, or run a static server:

```bash
npx serve .
```

Enhancement runs locally in a Web Worker when supported, with a Canvas fallback for older browsers. No uploaded images are sent to a server.

## Files

- `index.html` — app structure
- `styles.css` — UI styling
- `app.js` — upload, queue, comparison, download, and share logic
- `enhancer.worker.js` — background image enhancement
