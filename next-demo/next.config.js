/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const withNextPlugins = require('next-compose-plugins')
const nextConfig = {
  distDir: 'build',
  // reactStrictMode: true,
  pwa: {
    dest: 'public',
    swSrc: 'service-worker.js'
  },
  webpack: (config, options) => {
    return config
  }
}

module.exports = withNextPlugins([withPWA], nextConfig)
