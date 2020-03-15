const {
    resolve
} = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './demo/js/index.js', //入口文件
    output: {
        filename: 'build.js', //输出文件
        path: resolve(__dirname, 'build') //输出文件的地址
    },
    module: {
        rules: [{
                test: /\.css$/, //css文件的打包
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/, //less文件的打包
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(jpg|png|gif)$/, //图片的打包
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    esModule: false
                },

            },
            {
                test: /\.html$/, //html中图片的打包
                loader: 'html-loader'
            },
            {
                exclude: /\.(css|less|png|gif|jpg|html|js)/, //其他资源
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]'
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./demo/index.html" //html入口文件
        })
    ],
    mode: 'development'
}