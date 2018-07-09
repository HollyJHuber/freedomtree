import React from 'react';

const WhatOne = (props) => (
	<div 
		className = {props.selected === props.what1Id ? "what1 expand" : "what1"}
		id={props.what1Id} 
		onClick={(e) => {
			props.handleSelectWhatOne(props.what1Id)
		}}
	>
		<div className="col1"><i className={props.what1Icon}></i></div>
		<div className="col2">{props.what1Text}</div>
	</div>
);

export default WhatOne;