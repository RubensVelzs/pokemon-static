/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
];

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig:{
    hotjarId: process.env.HOTJAR_ID,
    hotjarSv: process.env.HOTJAR_SV
  },
  images:{
    domains:["raw.githubusercontent.com"]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
}

module.exports = nextConfig
