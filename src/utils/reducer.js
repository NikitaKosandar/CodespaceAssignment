import {combineReducers } from 'redux';
import { LoginReducer } from '../components/login/loginReducer';
import { listReducer } from '../components/list/listReducer';

const rootReducer = combineReducers({
    login : LoginReducer,
    user : listReducer,
});

export default rootReducer;
