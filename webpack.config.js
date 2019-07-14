const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin") 
// 这个插件会自动的将内存中的html页面和index.js合并

const VueLoaderPlugin = require("vue-loader/lib/plugin")
// 这个配置文件,其实就是一个js文件 通过node中的模块操作向外暴露了一个配置对象
module.exports = {
    // 入口
    entry:path.join(__dirname,"./src/main.js"),//指定webpack要打包的文件
    //出口
    output:{
        path:path.join(__dirname,"dist"),//指定输出文件目录
        filename:"bundle.js" //指定输出文件名称
    },
    mode:"development",//开发模式

    plugins:[// 所有webpack 插件的配置节点
        new htmlWebpackPlugin({
            // 在内存中生成html页面
            template:path.join(__dirname,"./src/index.html"),//指定的模板文件路径
            filename:"index.html" // 生成的页面名称
        }),
        new VueLoaderPlugin()
    ],
    // 暴露一个对象
    module:{//配置所有第三方 模块
        //这是一个属性 数组
        rules:[// 第三方模块 匹配规则
            // test:正则表达式// \.转义字符  $结束符
            // loader 加载器
            {test:/\.css$/,use:["style-loader","css-loader"]},//配置处理 .css文件
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
            //重点注意几个依赖件  less-loader 依赖于less文件
            // {test:/\.scss$/,use:["style-loader","css-loader","sass-loader"]},
            // sass-loader 依赖于node-sass文件
            {test:/\.(jpg|png|jpeg|gif)$/,use:"url-loader?limit=20000"},
            //url 路径解析图片 和字体图标
            {test:/\.(ttf|svg|eot|woff|woff2)$/,use:"url-loader"},
            // 将高级语法转为低级语法 让webpack可以解析
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            {test:/\.vue$/,use:"vue-loader"},

            
        ]
    }
}