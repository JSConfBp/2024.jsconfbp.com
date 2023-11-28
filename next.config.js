// https://nextjs.org/docs/pages/building-your-application/configuring/mdx
const withMDX = require("@next/mdx")();

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

// Example mdx and pwa config together: https://dev.to/j471n/convert-nextjs-app-to-pwa-3fd#comment-247la
module.exports = withPWA(withMDX(nextConfig));
