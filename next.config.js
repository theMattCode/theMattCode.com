const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

module.exports = withMDX(nextConfig);
