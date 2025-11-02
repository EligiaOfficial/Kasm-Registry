/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Eligia\'s Sandbox',
    description: 'My own containers for Kasm.',
    icon: '/img/logo.svg',
    listUrl: 'https://registry.eligia.net/',
    contactUrl: 'https://github.com/EligiaOfficial/Kasm-Registry/issues',
  },
  reactStrictMode: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
