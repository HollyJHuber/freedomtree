import React from 'react';
import { connect } from 'react-redux';

const History = (props) => (
	<div className='history__path'>
		{(props.kind === "dropdown" && ` > `) || 
			(props.kind === "query" && <br />)}
		{props.notation}
		{(props.kind === "dropdown" && ` > `) || 
			((props.kind === "query" && props.counter > 0 ) && <br />)}
	</div>
);

export default connect()(History);