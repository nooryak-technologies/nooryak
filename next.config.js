/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Packages all server files for easy cPanel deployment
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
