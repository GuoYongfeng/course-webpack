import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

import MyComponent from './components/MyComponent';

import 'bootstrap/dist/css/bootstrap.css';

// class MyComponent extends Component {
// 	render(){
// 		return <h1>欢迎参加珠峰React课程....</h1>
// 	}
// }

let rootEle = document.getElementById('app')

render(<MyComponent />, rootEle)
