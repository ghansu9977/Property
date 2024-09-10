/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.wallpapersafari.com',
      'img.freepik.com',
      'images.pexels.com',
      'encrypted-tbn0.gstatic.com', // Ensure this domain is included
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/api/:path*', // Proxy to the API server
      },
    ];
  },
};

export default nextConfig;
