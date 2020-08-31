const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const isDev = process.env.NODE_ENV === 'development';
let env = process.env.NODE_ENV;
console.log(env);
const config = {
    mode: 'production',
    entry: {
        index: path.join(__dirname, 'index.js'),
        er: path.join(__dirname, 'er.js'),
    },
    output: {
        filename: '[name].js', // 文件输出
        path: path.join(__dirname, '/dist')
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
        // new webpack.DefinePlugin({
        //     "process.env.NODE_ENV": JSON.stringify('production/development')
        // }),
        new HTMLPlugin({ // 打包输出HTML
            filename: 'index.html',
            template: 'index.html',
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true// 压缩内联css
            },
            chunks: ['./index']
        }),
        new HTMLPlugin({ // 打包输出HTML
            filename: 'second.html',
            template: 'second.html',
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true// 压缩内联css
            },
            chunks: ['./er']
        }),
    ]
}
module.exports = config;
