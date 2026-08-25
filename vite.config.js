import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // The site is served from https://cjaitej.github.io/portfolio/, not from a
  // domain root, so every built asset URL needs the repo name in front of it.
  // Left at the default '/', the deployed page would request
  // /assets/index-*.js — which on github.io resolves to another user's site
  // root rather than this one, and the page loads as unstyled HTML.
  //
  // This has to change if the site ever moves: '/' for a user site at
  // cjaitej.github.io or for a custom domain.
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
})
