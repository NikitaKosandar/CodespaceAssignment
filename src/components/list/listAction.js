import history from '../../utils/history';
import * as _Constants from "./listConstants";
export const submitedData = (payload) => dispatch => {
    if(payload){
        return dispatch(userSuccess(payload));
    }
}


function userSuccess(payload) {
    return {
        type: _Constants.FETCH_USER_DATA_SUCCESS,
        payload: payload,
    };
}
