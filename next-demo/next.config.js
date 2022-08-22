/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const withNextPlugins = require('next-compose-plugins')
console.log('1111111111111111111===', process.env)
const nextConfig = {
  distDir: 'build',
  // reactStrictMode: true,
  env: {
    // NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV
  },
  pwa: {
    dest: 'public',
    swSrc: 'service-worker.js'
  },
  webpack: (config, options) => {
    return config
  }
}

module.exports = withNextPlugins([withPWA], nextConfig)
