
// /** @type {import('next').NextConfig} */

const isDocker = process.env.DOCKER === "1";

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: isDocker ? 'http://backend:8001/api/:path*' : 'http://localhost:8001/api/:path*',
      },
    ]
  },
}

module.exports = nextConfig

