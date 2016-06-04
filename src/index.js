import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class MyComponent extends Component {
	render(){
		return <h1>欢迎参加珠峰React课程</h1>
	}
}

let rootEle = document.getElementById('app')

render(<MyComponent />, rootEle)
