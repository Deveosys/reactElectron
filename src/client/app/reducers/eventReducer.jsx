import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function catReducer(state = initialState.events, action) {  
	switch(action.type) {
		case actionTypes.LOAD_CATS_SUCCESS:
			return action.events
		default: 
			return state;
	}
}