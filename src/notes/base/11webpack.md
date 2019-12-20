# webpack

## 安装

- 首先要先安装node
- 在安装全局
  npm i webpack -g
  npm i webpack-cli -g
- 再进入局部安装
  npm install webpack -S
  npm install webpack-cli -S
  npm init

## 淘宝镜像

切换淘宝镜像
npm config set registry https://registry.npm.taobao.org
安装 cnpm
安装 命令 npm install -g cnpm --registry=https://registry.npm.taobao.org

## 打包

生产模式
webpack  --mode production
开发模式
webpack  --mode development

## 核心概念：

入口(entry) 默认 scr/index.js
输出(output) 出口 des/main.js
loader:webpack只支持js，不支持css、图片等、如果要想支持，使用loader。
插件(plugins)：有效的打包或者压缩css、js、html、图片。

## 安装server

npm install webpack-dev-server -s

## 安装loader

css
npm install style-loader css-loader -S

file
npm install file-loader -S

## 插件

html-webpack-plugin
src :开发阶段
public： 生产阶段
使用webpack.config.js

安装
npm install html-webpack-plugin -S

## 图片html-withimg-loader

安装
npm install html-withimg-loader -S

## css提取

安装
npm install extract-text-webpack-plugin@next -S

## babel

核心： babel-core
功能：
babel-loader
babel-preset-env
babel-preset-react
npm install  babel-core babel-loader  babel-preset-env babel-preset-react -S

## 安装cli

全局
npm install -g @vue/cli
局部
npm install -g @vue/cli

## 步骤

切换淘宝镜像
npm config set registry https://registry.npm.taobao.org
安装cnpm命令
npm install -g cnpm --registry=https://registry.npm.taobao.org
安装
cnpm i
执行
npm run serve

东东地址：
https://github.com/kitorv/study-notes/tree/study
https://github.com/kitorv/study-notes.git

导入项目：
http://www.cnblogs.com/dky20155212/p/6821634.html?utm_source=itdadao&utm_medium=referral

https://www.cnblogs.com/rubylouvre/archive/2013/01/24/2874694.html
