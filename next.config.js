/** @type {import('next').NextConfig} */
const nextConfig = {
  theme: {
    colors: {
      "custom-gray": "#e3e3e3",
    },
  },
  images: {
    domains: [
      "yt3.googleusercontent.com",
      "lh3.googleusercontent.com",
      "k.kakaocdn.net",
      "*",
    ],
  },
};

module.exports = nextConfig;
