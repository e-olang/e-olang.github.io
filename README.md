# e-olang.github.io

Personal website for Emmanuel Olang' — minimal, static, no build step.

Deployed at <https://e-olang.github.io>.

## Stack

Pure HTML, CSS, and a tiny vanilla JS file. No frameworks. No build pipeline.
GitHub Pages serves the files in this repo directly.

```
.
├── index.html             # Home
├── writing.html           # Articles index
├── projects.html          # Projects & gists
├── articles/              # One HTML file per article
│   └── hello-world.html
├── css/styles.css         # Single stylesheet (light + dark via CSS vars)
├── js/scripts.js          # Theme toggle + nav scroll state
└── assets/img/            # Profile picture, favicon, demos
```

## Local preview

Any static server works. The simplest:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Add a new article

1. Copy `articles/hello-world.html` to `articles/<slug>.html`.
2. In the new file, update:
   - `<title>` and the `<meta name="description">`
   - the `og:*` and `twitter:*` tags (URL, title, description)
   - the `<h1>` and `.article-meta` (date, read time, tags)
   - the body inside `<div class="prose">…</div>`
3. Add an entry to `writing.html` at the top of the `<ul class="list">`:

   ```html
   <li>
       <a class="list__item" href="articles/<slug>.html">
           <div class="list__row">
               <span class="list__title">Your post title</span>
               <span class="list__meta">Mon DD, YYYY</span>
           </div>
           <p class="list__desc">One-sentence summary.</p>
       </a>
   </li>
   ```

4. Optionally surface the most recent post on the homepage by adding a similar
   `<li>` block under the **Latest writing** section in `index.html`.

## Theme

The site supports light & dark modes:

- Default: follows the visitor's OS preference (`prefers-color-scheme`).
- Manual: the moon/sun button in the nav toggles a per-visitor override
  saved to `localStorage` under the key `theme` (`"light"` or `"dark"`).

All colours are defined as CSS custom properties at the top of
`css/styles.css` — change them there if you want to retheme.

## License

Source code: MIT-style — feel free to learn from it.
Content (articles, images): all rights reserved unless otherwise noted.
