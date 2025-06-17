/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        SERVER_URL: process.env.SERVER_URL,
        APP_URL: process.env.APP_URL,
        SERVER_URL_IMAGE: process.env.SERVER_URL_IMAGE
    },
    images: {
        remotePatterns: [
            {
              protocol: 'http',
              hostname: 'localhost',
              port: '4200',
              pathname: '/assets/**',
            },
        ]
    },
}

module.exports = nextConfig
