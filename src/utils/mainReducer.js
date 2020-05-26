import { SET_MAIN_REDUCER } from './actionType';

let initialState = null;

export default function(state, action) {
    state = state || initialState;
    switch (action.type) {
        case SET_MAIN_REDUCER:
            return {
                filter: action.filter,
                status: action.status
            };
        default:
            return state;
    }
}
