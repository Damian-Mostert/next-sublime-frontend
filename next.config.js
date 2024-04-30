// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {},
  images: {
    remotePatterns: [
      {
          protocol: 'http',
          hostname: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
          port: '',
          pathname: '/storage/**',
      },
  ],

    domains: [],
  },
};

module.exports = nextConfig;
