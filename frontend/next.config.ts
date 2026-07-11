import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prevent ~1GB of public images from being packed into serverless function traces.
  outputFileTracingExcludes: {
    "*": [
      "./public/school-images/**/*",
      "./public/images/Converted_images_webp/**/*",
      "./public/images/**/*.jpg",
      "./public/images/**/*.jpeg",
      "./public/images/**/*.png",
      "./public/images/**/*.webp",
    ],
  },
};

export default nextConfig;
