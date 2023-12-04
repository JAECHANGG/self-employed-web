/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "yt3.googleusercontent.com",
      "lh3.googleusercontent.com",
      "k.kakaocdn.net",
      "ssl.pstatic.net",
      "*",
    ],
  },
};

module.exports = nextConfig;
