# PhotoEnhancerPro

PhotoEnhancerPro is a fast, browser-based photo enhancement workspace for processing image batches one at a time. Upload photos, improve clarity, compare the original against the enhanced result, and download or share the finished image in the format you need.

## Features

- Bulk upload with drag-and-drop support
- Sequential processing queue with progress indicators
- Three enhancement presets:
  - Natural clarity — 2×
  - Crisp detail — 4×
  - Max resolution — 8×
- Interactive before-and-after comparison slider
- Download formats:
  - JPEG
  - JPG
  - PNG
  - WEBP
  - PDF print view
- Batch download for completed images
- Direct sharing through supported browser share tools
- Full-resolution browser-side processing
- Responsive dark interface for desktop and mobile

## Quick start

This project is a static web app and does not require a build step.

1. Clone the repository:

   ```bash
   git clone https://github.com/Demonhellohell/PhotoEnhancerPro.git
   cd PhotoEnhancerPro
   ```

2. Open `index.html` in a browser.

   For local development, you can also run any static file server, for example:

   ```bash
   npx serve .
   ```

## Usage

1. Choose photos or drag them into the upload area.
2. Select an enhancement preset.
3. Wait for each photo to finish processing in the queue.
4. Use the comparison slider to inspect the original and enhanced versions.
5. Download an individual result or download the completed batch.
6. Share the enhanced image using the available social sharing actions.

## Project structure

```text
PhotoEnhancerPro/
├── index.html   # Application markup
├── styles.css   # Responsive visual styling
├── app.js       # Upload, processing, comparison, download, and share logic
└── README.md    # Project documentation
```

## Notes

Enhancement currently runs in the browser using the Canvas API, so uploaded images are not sent to a server by this demo. Social platforms may apply their own compression after sharing, but the app passes the generated full-resolution image to the browser share or download flow.

## License

See [LICENSE](LICENSE) for details.
