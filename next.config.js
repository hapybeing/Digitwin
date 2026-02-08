/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'api.dicebear.com'],
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: false,
  },
}

module.exports = nextConfig
