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



import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';  
import { Provider } from 'react-redux'; 
import Events from './components/Events'
import {loadEvents} from './actions/eventActions';

const store = configureStore();
store.dispatch(loadEvents());

render(
	<Provider store={store}>
		<Events/>
	</Provider>,
	document.getElementById('app')
);

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