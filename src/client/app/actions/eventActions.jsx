import eventApi from '../api/eventAPI';

export function loadEvents() {  
	return function(dispatch) {
		return eventApi.getAllEvents().then(events => {
	  		dispatch(loadEventsSuccess(events));
		}).catch(error => {
	  		throw(error);
		});
	};
}

import * as types from './actionTypes';  

export function loadEventsSuccess(events) {  
	return {type: types.LOAD_EVENTS_SUCCESS, events};
}