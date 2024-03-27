/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_TOKEN: process.env.API_TOKEN,
    BASE_URL: process.env.BASE_URL,
    WINNER_URL: process.env.WINNER_URL
  },
  productionBrowserSourceMaps: false
};

export default {
  ...nextConfig,
  compress: false,
};