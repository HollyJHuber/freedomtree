import React from 'react';
import { connect } from 'react-redux';

const History = (props) => (

	<div className='history__path'>
	{props.notation}&nbsp;>&nbsp; 
	</div>
);

export default connect()(History);