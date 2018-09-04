import React from 'react';
import { connect } from 'react-redux';

import Dropdown from './Dropdown';
import { selectList } from '../actions/interviews';

class List extends React.Component {
  // methods
  displayDropdown = () => {
    this.props.selectList({ selectedId: this.props.listId  });
    console.log(this.props.listId, this.props.listNotation, this.props.selectedId);
  }
  render() {
    return (
      <div>
        <div 
          className={this.props.selectedId===this.props.listId ? "list__items list__itemsSelecte" :"list__items"}
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
              issues.filter(issue => issue.categoryid === this.props.listId).map(issue => (
                <Dropdown 
                  key={issue.id}
                  dropdownId={issue.id}
                  dropdownNotation={issue.notation}
                  dropdownText={issue.text}
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
const mapDispatchToProps = (dispatch) => ({
  selectList: (data) => dispatch(selectList(data))
});

export default connect(undefined, mapDispatchToProps)(List);

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