# webpack

```
$ ./node_modules/.bin/webpack --profile --col0m1ms op0ms optimiz11ms emit
Hash: 4b678517f72efff6a742
Version: webpack 1.13.1
Time: 117ms
    Asset     Size  Chunks             Chunk Names
bundle.js  1.58 kB       0  [emitted]  main
   [0] ./src/index.js 60 bytes {0} [built]
       factory:18ms building:20ms = 38ms
   [1] ./src/component.js 55 bytes {0} [built]
       [0] 38ms -> factory:4ms building:11ms = 53ms

```

```
$ ./node_modules/.bin/webpack --config webpack.config.js
Hash: 4b678517f72efff6a742
Version: webpack 1.13.1
Time: 104ms
    Asset     Size  Chunks             Chunk Names
bundle.js  1.58 kB       0  [emitted]  main
   [0] ./src/index.js 60 bytes {0} [built]
   [1] ./src/component.js 55 bytes {0} [built]


```

-p
```
!function(r){function t(n){if(e[n])return e[n].exports;var o=e[n]={exports:{},id:n,loaded:!1};return r[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var e={};return t.m=r,t.c=e,t.p="",t(0)}([function(r,t,e){var n=e(1);n()},function(r,t){r.exports=function(){alert("珠峰React课程")}}]);
```


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
