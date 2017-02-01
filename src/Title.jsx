import React from 'react';

function Title(){
	const titleStyle = {
		textAlign: 'center'
	};
	return (
		<div className="page-header" style={titleStyle}>
			<h1> To Do </h1>
		</div>
	);
}

module.exports = Title;