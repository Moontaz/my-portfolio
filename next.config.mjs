/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  images: {
    domains: ["images.unsplash.com", "pbs.twimg.com", "aceternity.com"],
  },
  swcMinify: true,
};

export default nextConfig;
