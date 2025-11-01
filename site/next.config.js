/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Eligia\'s Sandbox',
    description: 'My own containers for Kasm.',
    icon: '/img/logo.svg',
    listUrl: 'https://eligiaofficial.github.io/Kasm-Registry/',
    contactUrl: 'https://github.com/EligiaOfficial/Kasm-Registry/issues',
  },
  reactStrictMode: true,
  basePath: '/Kasm-Registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
