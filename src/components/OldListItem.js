import React from 'react';

export default class ListItem extends React.Component {
  constructor(props){
    super(props);
    this.displayDropdown = this.displayDropdown.bind(this);
  }
  displayDropdown = () => {
    console.log(this.props.listId, this.props.selectedId);
  }
  render() {
    return (
      <div 
        className={this.props.selectedId === this.props.listId ? 
          "list__listingSelected ": "list__listing"}
        id={this.props.listId}
        onClick={this.displayDropdown}
      >
        <div className="list__col1">
          <i className={this.props.listIcon}></i>
        </div>
        <div className="list__col2">
          {this.props.listText}
        </div>
      </div>
    );
  }
}