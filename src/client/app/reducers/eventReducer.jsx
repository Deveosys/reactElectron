// import * as actionTypes from '../actions/actionTypes';
// import initialState from './initialState';

// export default function eventReducer(state = initialState.events, action) {  
// 	switch(action.type) {
// 		case actionTypes.LOAD_EVENTS_SUCCESS:
// 			return action.events
// 		default: 
// 			return state;
// 	}
// }

export function loadAllEvents(events) {
  return {
    type: 'EVENTS_LOAD_ALL',
    events
  }
}


const eventReducer = (state = [], action) => {
	switch (action.type) {
		case 'EVENTS_LOAD_SUCCESS':
			return [
				...state,
				...action.events
			];
		case 'ADD_GENERIC_EVENT':
			return [
				...state,
				{
					id: state.length,
					date : "31/12/2016",
					name: "Je suis un event generique."
				}
			]
		default:
			return state;
	}
}

export default eventReducer
