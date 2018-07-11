import React from 'react';

class Item extends React.Component {
	render(){
		return(
			<li id={this.props.itemId}>
			{this.props.itemText}
		</li>
		);
	}
}


export default Item;