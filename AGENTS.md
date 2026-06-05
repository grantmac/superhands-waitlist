# Ditty workspace

This workspace is always a Vite + React + Tailwind application.

If the user asks to deploy, publish, or get a public URL, do not inspect the
repo for deployment options. Run this first:

```bash
/usr/local/bin/ditty-deploy
```

If the command is missing, this workspace was created before deployment support;
tell the user to open a fresh ditty. Do not look for GitHub Pages, Vercel,
Wrangler credentials, or ad hoc deploy scripts. After a successful deploy,
report the Public URL printed by the command.

Never POST `{ "appPath": "/root/workspace/diti" }` to Ditty's deployment API.
That path exists only inside this Modal VM; the server cannot read it.

Preserve this stack when implementing designs or feature requests:
- Keep Vite as the dev server and build tool.
- Keep Tailwind as the styling system.
- Build UI in React components under `src/`.
- Do not replace the app with standalone static HTML/CSS/JS.
- Do not remove `vite.config.js`, `src/main.jsx`, `src/App.jsx`, or `src/index.css` unless replacing them with equivalent Vite + Tailwind files.

When recreating a Figma design, implement it in `src/App.jsx` and Tailwind
classes first. Add small CSS only in `src/index.css` for global tokens,
font smoothing, and reusable Tailwind layers.

After changes, run `npm run build` when practical, then commit and push with
`/usr/local/bin/ditty-commit`.

The `ditty-deploy` command builds `dist/`, uploads it through Ditty's
deployment API, and prints the public URL.
