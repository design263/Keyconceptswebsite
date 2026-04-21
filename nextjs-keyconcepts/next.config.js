/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "https://enlargeable-kaycee-creamlaid.ngrok-free.dev",
  ],
  output: 'standalone',
  distDir: 'dist',
  // Prevent dist folder from being treated as a dependency
  experimental: {
    outputFileTracingIncludes: ['dist/**/*']
  }
};

export default nextConfig;
