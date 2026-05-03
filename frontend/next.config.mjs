/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/shubham',
        destination: '/shubham.html',
      },
    ];
  },
};


export default nextConfig;
