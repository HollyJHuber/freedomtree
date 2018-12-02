import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const History = (props) => (
	<div className='history__path'>
	<Link to={{
		pathname: `/interview/${props.link}`,
		state: {
			id: props.id,
			counter: props.counter
		}
	}}>
		{(props.kind === "dropdown" && ` > `) || 
			(props.kind === "query" && <br />)}
		{props.notation}
		{(props.kind === "dropdown" && ` > `) || 
			((props.kind === "query" ) && <br />)}
	</Link>
	</div>
);

export default connect()(History);