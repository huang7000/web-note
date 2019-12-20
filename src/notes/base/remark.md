:::snippet 安装依赖

```bash
npm install
```

```bash
npm config set registry https://registry.npm.taobao.org
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install
```

:::

:::snippet 运行项目，浏览器访问 `http://localhost:8080`

```bash
npm run serve
```

:::

:::snippet 打包发布，编译成静态的 html 文件

```bash
npm run build
```

:::

:::snippet vue ui

```bash
npm install -g @vue/cli
vue ui
```

:::

:::snippet 疑问点

```javascript
  "scripts": {
    "serve": "vue-cli-service serve ",
    "build": "vue-cli-service build ",
    "lint": "vue-cli-service lint"
  },
```

执行的是

```bash
$ vue-cli-service build
```

```javascript
  "scripts": {
    "serve": "vue-cli-service serve ",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
```

执行的是

```bash
$ vue-cli-service build --mode production --dest dist --target app --dashboard
```

:::
