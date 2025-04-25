/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable service worker in development
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
