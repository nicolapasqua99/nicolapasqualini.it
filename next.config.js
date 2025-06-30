/** @type {import('next').NextConfig} */

const nextConfig = {
    distDir: 'build',
    compiler: {
        styledComponents: true
    },
    output: 'export'
}

module.exports = nextConfig
