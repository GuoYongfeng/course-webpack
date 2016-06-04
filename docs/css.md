# webpack 处理 css 文件

1. 下载相关的loader
```
npm install --save-dev css-loader style-loader

```
2. webpack的配置
```
loaders: [
	{
		test: /\.js$/,
		loader: 'babel'
	},
   {
		test:/\.css/,
		loader: 'style!css'
   }
]
```
3. 写css代码
```
.demo {
  font-size: 48px;
  color: blue;
}

```
4. import css文件
```
import './index.css';
```
