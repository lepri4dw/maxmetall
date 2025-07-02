/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Для оптимизации на Render
  images: {
    domains: ['img.youtube.com'], // Для YouTube thumbnails
    unoptimized: true // Если возникнут проблемы с изображениями
  },
  experimental: {
    appDir: true
  },
  devIndicators: false
};

export default nextConfig;
