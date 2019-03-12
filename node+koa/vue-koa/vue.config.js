// vue.config.js
module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    baseUrl: '/',
    devServer: {
        proxy: {
            '/auth': {
                target: 'http://localhost:8889',
                changeOrigin: true,
                ws: true,
            },
            '/api': {
                target: 'http://localhost:8889',
                changeOrigin: true,
                ws: true,
            }
        }
    }
}