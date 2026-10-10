/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    env: {
        BUILD_DATE: new Date().toISOString().slice(0, 10),
    },
}

export default nextConfig
