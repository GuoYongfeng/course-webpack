
1. 下载babel相关的preset
```
npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react babel-preset-stage-0
```
2. 配置.babelrc
```
{
  "presets": ["es2015", "react", "stage-0"]
}

```
3. 下载react react-dom
```
$ npm install --save react react-dom
```
4. 配置webpack
```
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
  	loaders: [
  		{
  			test: /\.js$/,
  			loader: 'babel'
  		}
  	]
  }
};
```
5.index.html
```
<div id="app"></div>
```
6.src/index.js
```
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class MyComponent extends Component {
	render(){
		return <h1>欢迎参加珠峰React课程</h1>
	}
}

let rootEle = document.getElementById('app')
render(<MyComponent />, rootEle)
```
