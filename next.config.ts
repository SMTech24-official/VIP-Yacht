import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost"], // Allow images from localhost
    unoptimized: true, // Disable image optimization (optional)
  },
};

export default nextConfig;
