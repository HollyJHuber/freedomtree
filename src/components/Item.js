import React from 'react';

class Item extends React.Component {
	selectItem= (e) => {
		this.props.onSelectItem(this.props.itemId, this.props.itemNotation);
	}
	render(){
		return(
			<li 
				id={this.props.itemId}
				onClick={this.selectItem}
			>
				{this.props.itemText}
		</li>
		);
	}
}


export default Item;