import React from 'react';
import { connect } from 'react-redux';

const History = ({ history }) => (

	<div>
		<h4 className='history__path'>{history}</h4>
	</div>
);

export default connect()(History);