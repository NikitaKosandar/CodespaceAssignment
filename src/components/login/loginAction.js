import history from '../../utils/history';
import { setToken } from '../../utils/storage';
import loginService from '../../components/login/loginService';
import * as _Constants from "./loginConstants";
const res = { 
    token : '1234'
}
export const login = (payload) => dispatch => {
    dispatch(loginSuccess(true));
    setToken(res.token);
    // loginService.login(payload).then(res => {
    //     if (res) {
    //         dispatch(loginSuccess(true));
    //         setToken(res.token);
    //         // localStorage.setItem(`token`, '1234')
    //         history.push('/list');
    //     } else {
    //         dispatch(loginFailure(false));
    //         history.push('/login');
    //     }
    // });
}

function loginBegin() {
    return {
        type: _Constants.FETCH_USER_BEGIN
    };
}

function loginSuccess(payload, isReset) {
    return {
        type: _Constants.FETCH_USER_SUCCESS,
        payload: payload,
        isReset
    };
}

function loginFailure(error) {
    return {
        type: _Constants.FETCH_USER_FAILURE,
        payload: error
    };
}