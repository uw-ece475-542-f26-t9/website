// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    // Set this to your custom domain once it's configured, e.g. 'https://team9.example.com'.
    // No `base` is needed: with a custom domain the site is served from the root.
    site: "https://team9.milohpr.com",

    integrations: [mdx()],
});
