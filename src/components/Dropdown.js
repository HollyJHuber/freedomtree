import React from 'react';

class Dropdown extends React.Component {
  render() {
    return (
      <li
        id={this.props.dropdownId}
      >
        {this.props.dropdownText}
      </li>
    );
  }
}

export default Dropdown;