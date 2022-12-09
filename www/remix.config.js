/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
    serverDependenciesToBundle: ["hero-slider", "hero-slider/dist/index.mjs"],
    serverBuildTarget: 'node-cjs',
    server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
    cacheDirectory: './node_modules/.cache/remix',
    ignoredRouteFiles: ['**/*.test.{js,jsx,ts,tsx}'],
}
