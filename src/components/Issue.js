import React from 'react';

class Issue extends React.Component {
	render() {
		return(
			<div className ="what1">
				<div className="col1"><i className={this.props.issueIcon}></i></div>
				<div className="col2">{this.props.issueText}</div>
			</div>
		);
	}
}

export default Issue;