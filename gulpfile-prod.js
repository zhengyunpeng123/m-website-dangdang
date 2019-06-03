const { src, dest, series, parallel, watch } = require('gulp')
const rev = require('gulp-rev')
const revCollector = require('gulp-rev-collector')
const path = require('path');
const webpackStream = require('webpack-stream')
const gulpSass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')



// 拷贝 index.html 到 dist 
function copyhtml(){
    return src('./*.html')
        .pipe(dest('./dist'))
}

// 编译JS模块
function packjs(){
    return src('./src/**/*')
        .pipe(webpackStream({
            mode: 'production',
            entry: {
                app: './src/app.js'
            },
            output: {
                filename: '[name].js',
                path: path.resolve(__dirname,'./dist')
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
                        test: /\.art$/,
                        loader: 'string-loader'
                    }
                ]
            }
        }))
        .pipe(rev())
        .pipe(dest('./dist/scripts'))
        .pipe(rev.manifest())
        .pipe(dest('./rev/scripts'))
}

// 编译scss
function packCSS(){
    return src('./src/styles/app.scss')
        .pipe(gulpSass().on('error',gulpSass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rev())
        .pipe(dest('./dist/styles'))
        .pipe(rev.manifest())
        .pipe(dest('./rev/styles'))
}

// 拷贝libs文件
function copylibs(){
    return src('./src/libs/**/*')
        .pipe(dest('./dist/libs'))
}

// 拷贝icons
function copyicons(){
    return src('./src/icons/**/*')
        .pipe(dest('./dist/icons'))
}

// 拷贝images
function copyimages(){
    return src('./src/images/**/*')
        .pipe(dest('./dist/images'))
}

function revColl(){
    return src(['./rev/**/*.json','./dist/*.html'])
        .pipe(revCollector())
        .pipe(dest('./dist'))
}

exports.default = series(parallel(packjs,packCSS,copylibs,copyimages,copyicons),copyhtml,revColl)