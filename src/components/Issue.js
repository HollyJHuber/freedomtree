import React from 'react';
import Item from './Item';

class Issue extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			selectedItemId: 0
		}
		this.selectIssue = this.selectIssue.bind(this);
		this.selectItem = this.selectItem.bind(this);
	}
	selectIssue(e) {
		this.props.onSelectIssue(this.props.issueId, this.props.issueNotation);
	}
	selectItem(id, text) {
		this.setState((prevState) => {
			return {
				selectedItemId: id
			};
		});
		this.props.onSelectItem(id, text);
	}
	render() {
		return(
			<section>
				{this.props.landingPage && 
					<div 
					className ={this.props.selectedIssueId ===this.props.issueId ? "what1 expand" : "what1"}
					id={this.props.issueId} 
					onClick={this.selectIssue}
					>
						<div className="col1">
							<i className={this.props.issueIcon}></i>
						</div>
						<div className="col2">
							{this.props.issueText}
							{ (this.props.issueId === this.props.selectedIssueId) && (
								<ul className="what2" id={this.props.itemId}>
								{
									items.filter(item => item.issueId === this.props.issueId).map(item => 	(
										<Item 
											key={item.id} 
											itemId={item.id}
											itemNotation={item.notation}
											itemText={item.text}
											selectedItemId={this.state.selectedItemId}
											onSelectItem={this.selectItem}
										/>
									))
								}
								</ul>
							)}
						</div>
					</div>
				}
				{!this.props.landingPage &&
					<div className="what3">
							<div 
								className="listing"
								id={this.props.what3Id}
							>
							{this.props.what3Text}
							</div>
					</div>
				}
			</section>
		);
	}
}

const items = [
	{ id: 201, notation: "Prayer", text: "Prayer", issueId: 104},
	{ id: 202, notation: "Invocation/Blessing", text: "Invocation/Blessing", issueId: 104},
	{ id: 203, notation: "Bible/Scripture", text: "Bible/Scripture", issueId: 104},
	{ id: 204, notation: "Other Holy Book/Scripture", text: "Other Holy Book/Scripture", issueId: 104},
	{ id: 205, notation: "Creation Science/Intelligent Design", text: "Creation Science/Intelligent Design", issueId: 104},
	{ id: 206, notation: "Holidays/Songs", text: "Holidays/Songs", issueId: 104},
	{ id: 207, notation: "Proselytizing/Witnessing", text: "Proselytizing/Witnessing", issueId: 104},
	{ id: 208, notation: "Attire/Jewelry", text: "Attire/Jewelry", issueId: 104},
	{ id: 209, notation: "Baccalaureate", text: "Baccalaureate", issueId: 104},
	{ id: 210, notation: "Other Religion", text: "Other", issueId: 104},
	{ id: 211, notation: "Censorship", text: "Censorship", issueId: 105},
	{ id: 212, notation: "Press", text: "Press", issueId: 105},
	{ id: 213, notation: "Art/Music", text: "Art/Music", issueId: 105},
	{ id: 214, notation: "Personal Expression/Attire", text: "Personal Expression/Attire", issueId: 105},
	{ id: 215, notation: "Pledge of Allegiance", text: "Pledge of Allegiance", issueId: 105},
	{ id: 216, notation: "National Anthem", text: "National Anthem", issueId: 105},
	{ id: 217, notation: "Other Speech", text: "Other", issueId: 105}
	];

export default Issue;