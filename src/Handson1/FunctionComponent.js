import React from 'react';
import './styles.css';

const FunctionComponent = () => {
	return (
		<div className="boxing ">
			<h1>This is created using functional Component </h1>
			<p>This is done using external CSS</p>
			<p style={{ color: 'blue' }}>This is done using inline CSS</p>
		</div>
	);
};

export default FunctionComponent;
