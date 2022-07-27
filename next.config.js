/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["robohash.org", "joeschmoe.io"],
  },
};

module.exports = nextConfig;
