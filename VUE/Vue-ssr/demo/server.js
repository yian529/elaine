/**
 * @description: 文件或模块描述
 * @author: zengtiansheng
 * @update: 2018/3/2
 */
const fs = require('fs')
const path = require('path')
const Koa = require('koa')

//koa-router中间件
const KoaRuoter = require('koa-router') 

//koa-static中间件使用
const serve = require('koa-static')   

//https://ssr.vuejs.org/zh/api/
const { createBundleRenderer } = require('vue-server-renderer')

//页面级别缓存
const LRU = require('lru-cache')

const resolve = file => path.resolve(__dirname, file)
const app = new Koa()
const router = new KoaRuoter()
const template = fs.readFileSync(resolve('./src/index.template.html'), 'utf-8')

function createRenderer (bundle, options) {
    return createBundleRenderer(
        bundle,
        Object.assign(options, {
            template, // （可选）页面模板
            cache: LRU({
                max: 1000,
                maxAge: 0 * 60 * 15
            }),
            basedir: resolve('./dist'),
            runInNewContext: false
        })
    )
    //Renderer 选项
}

let renderer
const bundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
/**
*bundle 参数可以是以下之一：
*绝对路径，指向一个已经构建好的 bundle 文件（.js 或 .json）。必须以 / 开头才会被识别为文件路径。
*由 webpack + vue-server-renderer/server-plugin 生成的 bundle 对象。
*JavaScript 代码字符串（不推荐）。
**/
renderer = createRenderer(bundle, {
    clientManifest
})

/**
 * 渲染函数
 * @param ctx
 * @param next
 * @returns {Promise}
 */
function render (ctx, next) {
    ctx.set("Content-Type", "text/html")
    return new Promise (function (resolve, reject) {
        const handleError = err => {
            if (err && err.code === 404) {
                ctx.status = 404
                ctx.body = '404 | Page Not Found'
            } else {
                ctx.status = 500
                ctx.body = '500 | Internal Server Error'
                console.error(`error during render : ${ctx.url}`)
                console.error(err.stack)
            }
            resolve()
        }
        const context = {
            title: 'Vue Ssr 2.3',
            url: ctx.url
        }
        console.log("ctx.url：" + ctx)
        renderer.renderToString(context, (err, html) => {
            if (err) {
                return handleError(err)
            }
           // console.log("html:" + html)
            ctx.body = html
            resolve()
        })
    })
}

//加载静态资源
app.use(serve(__dirname + '/dist'))

router.get('*', render)

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

const port = process.env.PORT || 8089
app.listen(port, '0.0.0.0', () => {
    console.log(`server started at localhost:${port}`)
})



