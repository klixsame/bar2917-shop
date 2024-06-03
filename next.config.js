/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        SERVER_URL: process.env.SERVER_URL,
        APP_URL: process.env.APP_URL,
        SERVER_URL_IMAGE: process.env.SERVER_URL_IMAGE
    },
    images: {
        domains: ['localhost'], // Добавьте ваш локальный хост в список разрешенных доменов
    },
}

module.exports = nextConfig
