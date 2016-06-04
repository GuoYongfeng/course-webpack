// 1. import
import React, { Component } from 'react';
import styles from './index.css';


// 2. class 组件
// var MyComponent = React.createClass({
// 		render: function(){}
// })
class MyComponent extends Component {
	handleClick(){
		console.log(this)
	}
	render(){
		const a = false;
		const headerStyle = { color: "red" };

		return (
			<div className={ a ? "x" : "y" } onClick={this.handleClick.bind(this)}>
				{
					/**
					 *
					 */
				}
					<span className="a glyphicon glyphicon-asterisk"></span>
					<h1 style={ headerStyle } className={styles.demo}>.React Course.</h1>
			</div>
		)
	}
}

// 3. export 想要用的文件 import
export default MyComponent;
