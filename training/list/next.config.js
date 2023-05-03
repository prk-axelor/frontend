/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/open-platform-demo/:path*",
        destination: "http://localhost:8080/open-platform-demo/:path*", // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
