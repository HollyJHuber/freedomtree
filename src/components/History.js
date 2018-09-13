import React from 'react';
import { connect } from 'react-redux';

const History = (props) => (

	<div className="interview__container">
	{props.notes.data !== 'categories' && 
		<h4 className="history__path">{props.notes.history}</h4>
	}
	</div>

);

const mapStateToProps = (state) => {
	return {
		notes: state.notes
	}
};

export default connect(mapStateToProps)(History);