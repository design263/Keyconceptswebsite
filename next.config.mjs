import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-router": path.resolve("./src/app/lib/router-compat.js"),
      "react-router-dom": path.resolve("./src/app/lib/router-compat.js"),
    };
    return config;
  },
};

export default nextConfig;
