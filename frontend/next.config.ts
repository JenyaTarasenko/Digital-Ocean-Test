
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

//   // разрешаем внешние хосты для next/image
//   images: {
//     domains: ['localhost'], // здесь можно добавить другие домены, если нужно
//   },

//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: 'http://localhost:8000/api/:path*', // Django API
//       },
//     ];
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */

// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: 'backend',
//         port: '8001',
//         pathname: '/media/**',
//       },
//     ],
//   },
// }

// module.exports = nextConfig;
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

