var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : {
        main : './src/script/main.js',
        main1 : './src/script/main1.js'},
    output : {
        path : __dirname + '/dist',
        filename : 'js/[name]-[chunkhash].js'
    },
    plugins : [
        new htmlWebpackPlugin({
            template : 'index.html',
            filename : 'index1.html',
            //js引入的位置，head或者body
            inject : false,
            title : 'this is title',
            date : new Date().toDateString(),
            //压缩命令
            minify : {
                //删除注释
                removeComments : true,
                //删除空格
                collapseWhitespace : true
            }
        })
    ]
}