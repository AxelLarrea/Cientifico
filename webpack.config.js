// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');


// module.exports = {
//     entry: '.src/index.js', //Punto de entrada con su direccion
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'main.js' //Este es el nombre del archivo final para produccion
//     }
// };

// resolve: {
//     extensions: ['.js']
// };

// module: {
//     rules: [//reglas de webpack
//         {
//             test: /\.js$/,
//             exclude : /node_modules/,
//             use: {
//                 loader: 'babel-loader'
//             }
//         }
//     ]
// };

// plugins: [ //Plugins de webpack
//     new HtmlWebpackPlugin(
//         {
//             inject: true, //Como inyectar un valor en html
//             template: './public/index.html',
//             filename: './index.html'
//         }
//     ),
//     new CopyWebpackPlugin([{
//         from: './src/styles/styles.css',
//         to: ''
//     }])
// ]

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
},
resolve: {
    extensions: ['.js'],
},
module: {
    rules: [
        {
            test: /\.js?$/,
            exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
    }
    }
    ]
},
plugins: [
    new HtmlWebpackPlugin(
        {
            inject: true,
            template: './public/index.html',
            filename: './index.html',
        }
    ),
    new CopyWebpackPlugin([{
    from: './src/styles/styles.css',
    to: ''
    }])
    ]
}