### 前言

> 项目概述

#### 项目文件及文件夹简述：

+ bundle文件夹（项目整体打包后的文件夹，内含css，js，html和静态资源文件）
+ config文件夹（webpack配置文件夹，内含base，dev，pro三种配置，覆盖开发和生产版本配置）
+ demo文件夹（项目模块测试文件夹，内含项目html和入口文件index.js，主要通过再此引入写好的模块进行参数和方法功能测试）
+ dist文件夹（项目npm模块打包文件夹，内含es5文件夹【组件es5版本文件】；lib文件夹【组件es6版本文件】，es5最终上传npm使用）
+ src文件夹（模块开发文件夹，内含各个正在开发及已开发好的模块，其中utils和fonts文件夹主要为模块工具文件夹和字体icon图标文件夹）
+ index.js文件（es5语法） （将dist/es5下es5转换好的模块组件进行引入和暴露，方便项目npm安装依赖包后从@tianbo/tb-ui访问并引入组件）
+ .npmignore文件 （项目执行npm publish上传文件至npm时需要忽略的文件定义在次文件中）
+ ———>本项目需上传值npm文件：dist/es5、index.js、package.json、README.md
+ package.json文件 （项目依赖、名称、版本信息、主要运行及打包命令）

#### package.json文件主要命令简述：

```
// 项目启动命令（定义NODE_ENV环境变量为development开发环境，方便webpack加载process.env.NODE_ENV=development时相应的loader和plugins）
"start": "cross-env NODE_ENV=development webpack-dev-server --config config/webpack.dev.conf.js --open",

// 项目整体文件打包命令（定义NODE_ENV环境变量为production开发环境，方便webpack加载process.env.NODE_ENV=production时相应的loader和plugins）
"build:all": "cross-env NODE_ENV=production webpack --config config/webpack.pro.conf.js",

// 编译src文件夹下非es5语法文件，将转换好的es5文件拷贝至dist/es5文件夹下
"build:es5": "babel src --out-dir dist/es5 --copy-files",

// 编译src文件夹下的.sass文件，将转换好的css文件放在src对应的文件夹中
"build:scss": "node-sass src/ -o src/",

// 同时执行build:es5,build:scss，build:all命令
"build": "npm run build:scss&&npm run build:es5&&npm run build:all",

// 生产环境下webpack使用了webpack-bundle-analyzer性能检测插件，当项目执行npm run build或是npm run analyz命令后，浏览器会自动在默认8080端口下自动打开项目各文件体积查看的可视化界面
"analyz": "cross-env NODE_ENV=production npm_config_report=true npm run build",

```

> 使用指南

+ nrm工具安装

```
sudo npm i nrm -g  // 全局安装nrm工具，快速切换npm仓库源
nrm add tianbo https://registry-node.aliyun.com/org/1864737285065347/registry/tianbo/  // 添加名为tianbo的npm仓库源

nrm ls // 查看当前npm仓库源及已安装的所有npm仓库源
nrm use 仓库名  // 切换npm的仓库源
nrm del 仓库名  // 删除某个npm仓库源

```

+ 依赖包安装

```
nrm use tianbo // 切换仓库源至tianbo
npm login // 登陆npm，账号密码在Nodejs性能平台->模块仓库->我的信息中查看
npm i @tianbo/tb-ui --save-dev // 安装@tianbo/tb-ui模块

```


> TBAlert组件

#### 参数

|   参数名   |   类型   |   可选参数   |   默认值   |  描述    |
| -------- | -------- | ----------- | --------- | -------- |
| type  | string | success,warn,info,error | success | 设置alert提示框的主题风格 |
| showIcon | boolean | true,false | false | 是否显示icon图标 |
| message  | string  | -- | '' | 默认标题内容 |
| description | string | -- | '' | 默认详情描述信息 |
| closeable   | boolean | true,false | true | 设置默认状态下是否显示关闭按钮 |
| closeText   | string  | -- | x | 默认关闭按钮样式 |

#### 方法

|   方法名   |   说明   |
| --------- | -------- |
| beforeClose | alert提示框关闭前操作 |
| onClose | 点击关闭按钮关闭时操作 |