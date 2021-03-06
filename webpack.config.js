const WEBPACK = require('webpack');
const PATH = require('path');
var NODE_ENV = process.env.NODE_ENV || 'production';
console.log(NODE_ENV);


const CONFIG = {
    entry: './src/app.js',
    output: {
        path: PATH.resolve(__dirname, './dist/js'),
        filename: 'bundle.js'
    },

    mode: NODE_ENV,
    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV == 'development' ? 'eval' : 'nosources-source-map',


    module:{
        rules:[   //загрузчик для jsx
            {
               

                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env",'@babel/preset-react'],
                        plugins: ["@babel/transform-runtime", "transform-class-properties", "@babel/plugin-syntax-dynamic-import"]
                    }
                }
            },

            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader','sass-loader'],
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'file?name=fonts/[name].[ext]'
            }

        ]
    },

    plugins: [
        new WEBPACK.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],
}

module.exports = CONFIG;