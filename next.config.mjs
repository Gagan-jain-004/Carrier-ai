/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  // ⛔ Prevent ESLint warnings from breaking Vercel build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
