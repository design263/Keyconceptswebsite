/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    'https://enlargeable-kaycee-creamlaid.ngrok-free.dev',
  ],
  output: 'standalone',
  turbopack: {
    root: import.meta.dirname,
  },
}

export default nextConfig
