// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    urlImports: [process.env.NEXT_PUBLIC_BACKEND_BASE_URL],
  },
};

module.exports = nextConfig;
