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
   eslint: {
    ignoreDuringBuilds: true, // ✅ this will ignore ESLint errors during build
  },
};

export default nextConfig;
