import {applyMiddleware, compose, createStore} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import axios from 'axios';

import history from './history';
import {clearToken} from './storage';
import composedReducer from './reducer';
const middleware = routerMiddleware(history);

const customMiddleWare = store => next => action => {
    if(action.type === 'API_PROCESS') {
        axios.interceptors.response.use((response) => {
            return response ? response : next(action);
        }, (error) => {
            if(error.response) {
                console.log("error", error.response);
                if(error.response.status === 401) {
                    clearToken();
                    history.push('/login');
                }
            }
        });
    };
    next(action);
}


const store = createStore(composedReducer, compose(
    applyMiddleware(customMiddleWare, middleware)
));

export default store;
