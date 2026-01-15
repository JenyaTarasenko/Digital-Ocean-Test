// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: 'http://localhost:8000/api/:path*', // Django API
//       },
//     ]
//   },
// }

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // разрешаем внешние хосты для next/image
  images: {
    domains: ['localhost'], // здесь можно добавить другие домены, если нужно
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8000/api/:path*', // Django API
      },
    ];
  },
};

module.exports = nextConfig;

