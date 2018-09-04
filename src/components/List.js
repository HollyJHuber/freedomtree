import React from 'react';

import Dropdown from './Dropdown';

export default class List extends React.Component {
  constructor(props){
    super(props);
    this.displayDropdown = this.displayDropdown.bind(this);
    this.state = {
      selectedId: 0,
      selectedText: ''
    }
  }
  // methods
  // selectList = (e) => {
  //   this.props.onSelectList(this.props.listId, this.props.listNotation);
  // }
  displayDropdown = () => {
    // redux leftover
  //   this.props.selectList({ selectedId: this.props.listId  });
    this.setState((prevState) => {
      return {
        selectedId: this.props.listId, 
        selectedText: this.props.listText
      }
    });
    // * debug *
    console.log(this.props.listId, this.props.listNotation);
   }
  render() {
    return (
      <div>
        <div 
          className={this.state.selectedId===this.props.listId ? "list__listingSelected " : "list__listing"}
          id={this.props.listId}
          onClick={this.displayDropdown}
        >
          <div className="list__col1">
            <i className={this.props.listIcon}></i>
          </div>
          <div className="list__col2">
            {this.props.listText}
            <ul className="list__dropDownItem">
            {
              dropItems.filter(dropItem => dropItem.categoryid === this.props.listId).map(dropItem => (
                <Dropdown 
                  key={dropItem.id}
                  dropdownId={dropItem.id}
                  dropdownNotation={dropItem.notation}
                  dropdownText={dropItem.text}
                />
              ))
            }
           </ul>
          </div>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   selectList: (data) => dispatch(selectList(data))
// });

// export default connect(undefined, mapDispatchToProps)(List);

const issues = [
  { id: 201, notation: "Prayer", text: "Prayer", categoryId: 104},
  { id: 202, notation: "Invocation/Blessing", text: "Invocation/Blessing", categoryId: 104},
  { id: 203, notation: "Bible/Scripture", text: "Bible/Scripture", categoryId: 104},
  { id: 204, notation: "Other Holy Book/Scripture", text: "Other Holy Book/Scripture", categoryId: 104},
  { id: 205, notation: "Creation Science/Intelligent Design", text: "Creation Science/Intelligent Design", categoryId: 104},
  { id: 206, notation: "Holidays/Songs", text: "Holidays/Songs", categoryId: 104},
  { id: 207, notation: "Proselytizing/Witnessing", text: "Proselytizing/Witnessing", categoryId: 104},
  { id: 208, notation: "Attire/Jewelry", text: "Attire/Jewelry", categoryId: 104},
  { id: 209, notation: "Baccalaureate", text: "Baccalaureate", categoryId: 104},
  { id: 210, notation: "Other Religion", text: "Other", categoryId: 104},
  { id: 211, notation: "Censorship", text: "Censorship", categoryId: 105},
  { id: 212, notation: "Press", text: "Press", categoryId: 105},
  { id: 213, notation: "Art/Music", text: "Art/Music", categoryId: 105},
  { id: 214, notation: "Personal Expression/Attire", text: "Personal Expression/Attire", categoryId: 105},
  { id: 215, notation: "Pledge of Allegiance", text: "Pledge of Allegiance", categoryId: 105},
  { id: 216, notation: "National Anthem", text: "National Anthem", categoryId: 105},
  { id: 217, notation: "Other Speech", text: "Other", categoryId: 105}
];

const dropItems = issues;
