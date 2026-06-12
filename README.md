# akshymalvia.github.io

Personal resume site of **Akshay Malviya** — Lead Software Engineer (Frontend Architecture, Vue.js).

Live at [akshymalvia.github.io](https://akshymalvia.github.io), served by GitHub Pages from the `master` branch.

## Stack

Hand-built static site — no frameworks, no build pipeline, no dependencies.

- **HTML** — single page ([index.html](index.html))
- **Sass** — one self-contained stylesheet ([sass/main.scss](sass/main.scss)) compiled to [css/main.css](css/main.css)
- **Vanilla JS** ([js/main.js](js/main.js)) — scroll-spy nav, reveal-on-scroll animations, cursor glow
- **Font Awesome 4** (self-hosted) for icons, **Inter** + **JetBrains Mono** via Google Fonts

## Development

Two VS Code extensions cover the whole workflow:

- **Live Sass Compiler** — watches `sass/main.scss` and writes `css/main.css` on save
- **Live Server** — serves the site at `http://localhost:5500`

Open the folder, hit *Watch Sass* and *Go Live*, and edit away. Browser debug configs for the live server are in [.vscode/launch.json](.vscode/launch.json).

## Deploying

Push to `master` — GitHub Pages picks it up automatically.
