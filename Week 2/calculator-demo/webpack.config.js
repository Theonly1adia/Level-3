const path= require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist/"
    },
    devServer: {
        static: './dist',
        hot: true,
      },
};
