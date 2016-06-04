import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

console.log( React );
console.log( ReactDOM );
console.log( React.createElement('h1', null, 'hhhh') );
import MyComponent from './components/MyComponent/index.js';

import 'bootstrap/dist/css/bootstrap.css';

// class MyComponent extends Component {
// 	render(){
// 		return <h1>欢迎参加珠峰React课程....</h1>
// 	}
// }

let rootEle = document.getElementById('app')

render(<MyComponent />, rootEle)
