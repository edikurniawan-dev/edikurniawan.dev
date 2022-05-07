/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: 'custom',
    },
};
const withPWA = require('next-pwa');

module.exports = withPWA({
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
    },
});
module.exports = nextConfig;
