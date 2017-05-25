// require('./less/main.less');
// 'use strict';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

// console.log('ok');

// var initialState = {
// 	'events' : [
// 		{
// 			date : "01/01/2012",
// 			name: "Mon premier event"
// 		},
// 		{
// 			date : "01/01/2012",
// 			name: "Mon deuxième event"
// 		}
// 	]
// }

// function events(state = initialState, action) {
// 	console.log(state);
// 	return state;
// }


// import { createStore } from 'redux'
// import { combineReducers } from 'redux'
// const store = createStore(
// 	combineReducers({
// 		events
// 	})
// );

// store.subscribe









// import React from 'react';
// import {render} from 'react-dom';
// import configureStore from './store/configureStore';  
// import { Provider } from 'react-redux'; 
// import Events from './components/Events'
// import {loadEvents} from './actions/eventActions';

// const store = configureStore();
// store.dispatch(loadEvents());

// render(
// 	<Provider store={store}>
// 		<Events/>
// 	</Provider>,
// 	document.getElementById('app')
// );

const persist = function(){
	var db = require('electron').remote.getGlobal('db');
	db.events.insert(store.getState(), function (err, newEvents) {
		console.log('db updated');
		if (err) {
			console.log(err);
		}
	});
}

import eventReducer from './reducers/eventReducer';
import { createStore } from 'redux';
const store = createStore(eventReducer);

import React from 'react';
import ReactDom from 'react-dom';

function EventList(props) {
	if (props.events.length === 0) {
		return <p>Loading....</p>;
	}
	return  <ul>
				{
					props.events.map( (e)=>
						<li key={e.id}>
							{e.date} <br/>
							{e.name}
						</li>
					)
				}
			</ul>;
}

var render = () => {
	ReactDom.render(
		<div>
			<EventList events={store.getState()} />
			<button onClick={ () => { store.dispatch({ type : 'ADD_GENERIC_EVENT' }) } }>Ajouter un event générique</button>
			<button onClick={ persist }>Enregistrer</button>
		</div>,
		document.getElementById('app')
	);
}
store.subscribe(render);
render();


var loadEvents = () => {
	var db = require('electron').remote.getGlobal('db');
	db.events.find({}, (err, events) => {
		if (err) {
			console.log(err);
			return false;
		}

		store.dispatch({ type : 'EVENTS_LOAD_SUCCESS', events : events });
		return true;
	});
}

loadEvents();




// var db = require('electron').remote.getGlobal('db');
// var event = {
// 	date : "01/01/2012",
// 	name: "Mon premier event"
// };

// db.events.insert(event, function (err, newEvents) {
// });

// db.events.find({}, function (err, events) {
// 	console.log(events);
// });

// var guest = {
// 	name: "Olivier Dupont",
// 	company: "Acme"
// };

// db.guests.insert(guest, function (err, newGuests) {
// 	console.log(newGuests);
// });

// db.guests.find({}, function (err, guests) {
// 	console.log(guests);
// });