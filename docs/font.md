

## 图标字体

1. 下载url-loader和file-loader
```
$ npm install url-loader file-loader --save-dev
```
2. 配置webpack
```
{
  test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
  loader: "url?limit=10000"
}
```
3. 下载bootstrap
```
npm install --save bootstrap
```
4. 在src/index.js引入bootstrap.css
```
import 'bootstrap/dist/css/bootstrap.css';
```
5. 在组件中使用图标
