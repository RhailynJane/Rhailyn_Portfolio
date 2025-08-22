import type { NextConfig } from "next";

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Change the build output directory to 'next_build'
  distDir: 'next_build',
  // Optional: Enable static exports if you don't need server-side features
  // output: 'export',
}

module.exports = nextConfig