/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['localhost', '127.0.0.1'],
  },
  experimental: {
    appDir: true,
    serverComponents: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
    ignoreBuildErrorsRootLine: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configure alias path mappings
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": "./src",
    };
    return config;
  },
};

export default nextConfig;