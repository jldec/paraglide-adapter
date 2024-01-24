import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// https://inlang.com/m/dxnzrydw/library-inlang-paraglideJsAdapterSvelteKit
import { paraglide } from '@inlang/paraglide-js-adapter-sveltekit/vite';

export default defineConfig({
  plugins: [
    paraglide({
      project: './project.inlang',
      outdir: './src/paraglide',
    }),
    sveltekit(),
  ],
});
