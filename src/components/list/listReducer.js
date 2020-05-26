
import * as _Constants from './listConstants';

export const listReducer = (state = _Constants.initialState, action) => {
    switch (action.type) {
        case _Constants.FETCH_USER_DATA_SUCCESS: return fetchuserSuccess(state, action);
        default:
            return state;
    }
}

function fetchuserSuccess(state, action) {
    return {
        ...state,
        ...action.payload
    };
}
