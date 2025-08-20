const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  output: 'export', // Обязательно для статического экспорта
  trailingSlash: true,
  basePath: '', // Укажите base path если сайт не в корне домена
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../'),
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: { 
    unoptimized: true,
    loader: 'custom',
    loaderFile: './public/image-loader.js',
  },
};

module.exports = nextConfig;
