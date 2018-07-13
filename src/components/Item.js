import React from 'react';

class Item extends React.Component {
	constructor(props){
		super(props);
		this.selectItem=this.selectItem.bind(this);
	}
	selectItem(e) {
		this.props.onSelectItem(this.props.itemId);
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