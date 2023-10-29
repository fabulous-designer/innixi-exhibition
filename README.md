# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### 文件结构
```
.github
    workflows // github工作流配置文件文件夹用于配置Action
        build.yml // 打包工作流配置文件
public // 静态文件夹
    favicon.ico // tab标签icon
    favicon.svg // safari tab及桌面标签icon
    index.html // 网页入口模板
    robots.txt // 爬虫配置文件
src // 源文件文件夹
    assets // 资源文件夹
        bottle_active.svg // 激活时瓶子轮廓图片
        bottle.svg // 瓶子轮廓图片
        check.svg // 首页提示勾标签
        logo.svg // 首页logo
    components // 模块文件夹
        Bottle.js // 单个瓶子
        Bottles.js // 瓶子列表
        Home.js // 首页
        Poster.js // 海报页
        Progress.js // 进度条也
        WelcomePop.js // 提示弹窗
    fonts // 字体文件夹 src/styles/App.css中保存有CSS中对应字体名称
        ApercuLight.ttf
        ApercuMedium.ttf
        ApercuRegular.ttf
        SFProTextBold.ttf
        SFProTextRegular.ttf
    styles // 样式文件夹, 文件名与模块、组件文件对应
        App.css
        Bottle.css
        Bottles.css
        Home.css
        index.css // 全局样式
        Poster.css
        Progress.css
        WelcomePop.css
    App.js // 应用组件文件
    index.js // 入口文件
    ResponsiveApp.js // 响应式组件
    setupTests.js
.babelrc // Babel配置
.gitignore // git忽略配置
config-overrides.js // 网站打包配置文件
package-lock.json
package.json
README.md
rollup.config.js // 组件打包配置
```