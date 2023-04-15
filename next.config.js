/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['speedy-tune-ups.vercel.app'],
    loader: 'default',
  },
};

module.exports = nextConfig;