// import React from 'react';
// import {render} from 'react-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import FlatButton from 'material-ui/FlatButton';

// import {
//   Table,
//   TableBody,
//   TableHeader,
//   TableHeaderColumn,
//   TableRow,
//   TableRowColumn,
// } from 'material-ui/Table';

// class Events extends React.Component {
// 	render () {
// 		return <MuiThemeProvider>
// 			<div>
// 				<h1>Evénements</h1>
// 				<EventsTab/>
// 			</div>
// 		</MuiThemeProvider>;
// 	}
// }

// export default Events

// class EventsTab extends React.Component {

// 	state = {
// 		fixedHeader: true,
// 		stripedRows: true,
// 		showRowHover: true,
// 		selectable: false,
// 		multiSelectable: false,
// 		enableSelectAll: false,
// 		deselectOnClickaway: true,
// 		showCheckboxes: false,
// 		height: '300px',
// 	};

// 	render () {
// 		return <Table
// 			height={this.state.height}
// 			fixedHeader={this.state.fixedHeader}
// 			fixedFooter={this.state.fixedFooter}
// 			selectable={this.state.selectable}
// 			multiSelectable={this.state.multiSelectable}
// 		>
// 			<TableHeader
// 				displaySelectAll={this.state.showCheckboxes}
// 				adjustForCheckbox={this.state.showCheckboxes}
// 				enableSelectAll={this.state.enableSelectAll}
// 			>
// 				<TableRow>
// 					<TableHeaderColumn>ID</TableHeaderColumn>
// 					<TableHeaderColumn>Name</TableHeaderColumn>
// 					<TableHeaderColumn>Status</TableHeaderColumn>
// 				</TableRow>
// 			</TableHeader>
// 			<TableBody
// 				displayRowCheckbox={this.state.showCheckboxes}
// 				deselectOnClickaway={this.state.deselectOnClickaway}
// 				showRowHover={this.state.showRowHover}
// 				stripedRows={this.state.stripedRows}
// 			>
// 				<TableRow>
// 					<TableRowColumn>1</TableRowColumn>
// 					<TableRowColumn>John Smith</TableRowColumn>
// 					<TableRowColumn>Employed</TableRowColumn>
// 				</TableRow>
// 				<TableRow>
// 					<TableRowColumn>2</TableRowColumn>
// 					<TableRowColumn>Randal White</TableRowColumn>
// 					<TableRowColumn>Unemployed</TableRowColumn>
// 				</TableRow>
// 				<TableRow>
// 					<TableRowColumn>1</TableRowColumn>
// 					<TableRowColumn>John Smith</TableRowColumn>
// 					<TableRowColumn>Employed</TableRowColumn>
// 				</TableRow>
// 				<TableRow>
// 					<TableRowColumn>2</TableRowColumn>
// 					<TableRowColumn>Randal White</TableRowColumn>
// 					<TableRowColumn>Unemployed</TableRowColumn>
// 				</TableRow>
// 				<TableRow>
// 					<TableRowColumn>1</TableRowColumn>
// 					<TableRowColumn>John Smith</TableRowColumn>
// 					<TableRowColumn>Employed</TableRowColumn>
// 				</TableRow>
// 				<TableRow>
// 					<TableRowColumn>2</TableRowColumn>
// 					<TableRowColumn>Randal White</TableRowColumn>
// 					<TableRowColumn>Unemployed</TableRowColumn>
// 				</TableRow>
// 				<TableRow>
// 					<TableRowColumn>1</TableRowColumn>
// 					<TableRowColumn>John Smith</TableRowColumn>
// 					<TableRowColumn>Employed</TableRowColumn>
// 				</TableRow>
// 				<TableRow>
// 					<TableRowColumn>2</TableRowColumn>
// 					<TableRowColumn>Randal White</TableRowColumn>
// 					<TableRowColumn>Unemployed</TableRowColumn>
// 				</TableRow>
// 			</TableBody>
// 		</Table>;
// 	}
// }


import React, {PropTypes} from 'react';  
import {connect} from 'react-redux';
import * as catActions from '../actions/eventActions';

class Events extends React.Component {
	render () {
		return(
			<div>
				<h1>Evénements</h1>
				<ul className="list-group">
					{this.props.events.map(event => 
						<li className="list-group-item" key={event.id}>
							{event.name}
						</li>
					)}
				</ul>
			</div>
		);
	}
}


Event.propTypes = {
	events: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		events: state.events
	};
} 

export default connect(mapStateToProps)(Event); 