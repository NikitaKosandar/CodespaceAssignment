
import * as _Constants from './loginConstants';

export const LoginReducer = (state = _Constants.initialState, action) => {
    switch (action.type) {
        case _Constants.FETCH_USER_BEGIN: return fetchloginBegin(state);
        case _Constants.FETCH_USER_SUCCESS: return fetchloginSuccess(state, action);
        case _Constants.FETCH_USER_FAILURE: return fetchloginFailure(state, action);
        default:
            return state;
    }
}

function fetchloginBegin(state, action) {
    return {
        ...state,
        loading: true
    };
}

function fetchloginSuccess(state, action) {
    return {
        ...state,
        loading: false,
        ...action.payload
    };
}

function fetchloginFailure(state, action) {
    return {
        ...state,
        loading: false,
        error: action.payload
    };
}