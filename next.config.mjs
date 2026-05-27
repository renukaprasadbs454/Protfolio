/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel project still expects "dist" from legacy Vite settings.
  // Remove this after clearing Output Directory in Vercel dashboard.
  distDir: "dist",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
      },
      {
        protocol: "https",
        hostname: "github-readme-streak-stats.herokuapp.com",
      },
      {
        protocol: "https",
        hostname: "ghchart.rshah.org",
      },
    ],
  },
};

export default nextConfig;
