import React, { Component } from 'react';
import './styles.css';

class ClassComponent extends Component {
	render() {
		return (
			<div className="boxing box2">
				<h1>This is created using class Component </h1>
				<p>This is done using external CSS</p>
				<p style={{ color: 'blue' }}>This is done using inline CSS</p>
			</div>
		);
	}
}

export default ClassComponent;
