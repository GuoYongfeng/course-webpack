// 1. import
import React, { Component } from 'react';

import './index.css';

// 2. class 组件
// var MyComponent = React.createClass({
// 		render: function(){}
// })
class MyComponent extends Component {
	render(){
		return (
			<div>
					<span className="a glyphicon glyphicon-asterisk"></span>
					<h1 className="demo">欢迎参加珠峰React课程....</h1>
			</div>
		)
	}
}

// 3. export 想要用的文件 import
export default MyComponent;
