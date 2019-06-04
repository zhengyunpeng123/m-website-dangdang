const { src, dest, series, parallel, watch } = require('gulp')
const path = require('path');
const gulpWebserver = require('gulp-webserver')
const webpackStream = require('webpack-stream')
const gulpSass = require('gulp-sass')
const proxy = require('http-proxy-middleware')
const del = require('del')



// 拷贝 index.html 到 dev 
function copyhtml(){
    return src('./*.html')
        .pipe(dest('./dev'))
}

// 启动一个server 
function webserver(){
    return src('./dev/')
        .pipe(gulpWebserver({
            port: 4500,
            livereload: true,
            middleware: [
                proxy('./api',{
                    target: 'https://m.lagou.com',
                    // 访问不同的域名，需要设置成true
                    changeOrigin: true,
                    // 
                    pathRewrite: {
                        '^/api': ''
                    }
                })
            ]
        }))
}

// 编译JS模块
function packjs(){
    return src('./src/**/*')
        .pipe(webpackStream({
            mode: 'development',
            entry: {
                app: './src/app.js'
            },
            output: {
                filename: '[name].js',
                path: path.resolve(__dirname,'./dev')
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env'],
                                plugins: ['@babel/plugin-transform-runtime']
                            }
                        }
                    },{
                        test: /\.html$/,
                        loader: 'string-loader'
                    }
                ]
            }
        }))
        .pipe(dest('./dev/scripts'))
}

// 编译scss
function packCSS(){
    return src('./src/styles/app.scss')
        .pipe(gulpSass().on('error',gulpSass.logError))
        .pipe(dest('./dev/styles'))
}

// 拷贝libs文件
function copylibs(){
    return src('./src/libs/**/*')
        .pipe(dest('./dev/libs'))
}

// 拷贝icons
function copyicons(){
    return src('./src/icons/**/*')
        .pipe(dest('./dev/icons'))
}

// 拷贝images
function copyimages(){
    return src('./src/images/**/*')
        .pipe(dest('./dev/images'))
}

// clear方法
function clear(){
    return function() {
        return del(target)
    }
}

// 设置监听
function watcher(){
    watch('./src/libs/**/*', series(clear('./dev/libs'), copylibs))
    watch('./src/images/**/*', series(clear('./dev/images'), copyimages))
    watch('./src/icons/**/*', series(clear('./dev/icons'), copyicons))
    watch('./*.html', series(clear('./dev/*.html'), copyhtml))
    watch('./src/styles/**/*', series(packCSS))
    watch(['./src/**/*', '!src/libs/**/*', '!src/icons/**/*', '!src/images/**/*', '!src/styles/**/*'], series(packjs))
}

exports.default = series(parallel(packjs,packCSS,copylibs,copyimages,copyicons),copyhtml,webserver,watcher)