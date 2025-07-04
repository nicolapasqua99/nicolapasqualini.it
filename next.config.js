/** @type {import('next').NextConfig} */

const nextConfig = {
    compiler: {
        styledComponents: true
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    allowedDevOrigins: [
        '3000-idx-np-portfolio-1720018431483.cluster-rz2e7e5f5ff7owzufqhsecxujc.cloudworkstations.dev'
    ]
}

module.exports = nextConfig
