/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.daisyui.com",
      },
      {
        protocol: "https",
        hostname: "apod.nasa.gov",
      },
      {
        protocol: "https",
        hostname: "www.youtube.com",
      },
    ],
  },
};

export default nextConfig;
