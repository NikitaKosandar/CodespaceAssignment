import {combineReducers } from 'redux';
import mainReducer from './mainReducer';
import { LoginReducer } from '../components/login/loginReducer';

const rootReducer = combineReducers({
    mainReducer: mainReducer,
    login : LoginReducer,
});

export default rootReducer;
