/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "twitter-server-devlop.s3.ap-south-1.amazonaws.com",
    ],
  },
};

export default nextConfig;
