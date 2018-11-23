import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const History = (props) => (
	<div className='history__path'>
	<Link to={{
		pathname: '/consult/10013'
	}}>
		{(props.kind === "dropdown" && ` > `) || 
			(props.kind === "query" && <br />)}
		{props.notation}
		{(props.kind === "dropdown" && ` > `) || 
			((props.kind === "query" && props.counter > 0 ) && <br />)}
	</Link>
	</div>
);

export default connect()(History);