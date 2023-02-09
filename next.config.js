/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig:{
    hotjarId: process.env.HOTJAR_ID,
    hotjarSv: process.env.HOTJAR_SV
  },
  images:{
    domains:["raw.githubusercontent.com"]
  }
}

module.exports = nextConfig
