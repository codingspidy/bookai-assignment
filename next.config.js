/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            port: '',
            pathname: '/adarshagupta/trybookai/main/logo.png',
          },
        ],
      },
};


