const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
// let extractPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
let env = process.env.NODE_ENV;
console.log(env);

var config = ''
if (env == 'development') {
    config = {
        mode: 'development',
        entry: {
            index: path.join(__dirname, 'js/index.js'),
            er: path.join(__dirname, 'js/er.js'),
        },
        output: {
            publicPath: '/',
            filename: 'js/[name].js', // 文件输出
            path: path.join(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.css$/, // 处理css文件
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.(gif|jpg|jpeg|png|svg)$/, // 处理图片文件
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 1024,
                                name: 'static/image/[name].[ext]',
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HTMLPlugin({ // 打包输出HTML
                filename: 'views/index.html',
                template: './views/index.html',
                minify: { // 压缩HTML文件
                    removeComments: true, // 移除HTML中的注释
                    collapseWhitespace: true, // 删除空白符与换行符
                    minifyCSS: true// 压缩内联css
                },
                chunks: ['./js/index']
            }),
            new HTMLPlugin({ // 打包输出HTML
                filename: 'views/second.html',
                template: './views/second.html',
                minify: { // 压缩HTML文件
                    removeComments: true, // 移除HTML中的注释
                    collapseWhitespace: true, // 删除空白符与换行符
                    minifyCSS: true// 压缩内联css
                },
                chunks: ['./js/er']
            }),
        ]
    }
} else {
    config = {
        mode: 'production',
        entry: {
            index: path.join(__dirname, 'js/index.js'),
            er: path.join(__dirname, 'js/er.js'),
        },
        output: {
            publicPath: '../',
            filename: 'js/[name].js', // 文件输出
            path: path.join(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.css$/, // 处理css文件
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.(gif|jpg|jpeg|png|svg)$/, // 处理图片文件
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 1024,
                                name: 'static/image/[name].[ext]',
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HTMLPlugin({ // 打包输出HTML
                filename: 'views/index.html',
                template: './views/index.html',
                minify: { // 压缩HTML文件
                    removeComments: true, // 移除HTML中的注释
                    collapseWhitespace: true, // 删除空白符与换行符
                    minifyCSS: true// 压缩内联css
                },
                chunks: ['./js/index']
            }),
            new HTMLPlugin({ // 打包输出HTML
                filename: 'views/second.html',
                template: './views/second.html',
                minify: { // 压缩HTML文件
                    removeComments: true, // 移除HTML中的注释
                    collapseWhitespace: true, // 删除空白符与换行符
                    minifyCSS: true// 压缩内联css
                },
                chunks: ['./js/er']
            }),
        ]
    }
}


module.exports = config;
