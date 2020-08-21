import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { devToolsEnhancer } from "redux-devtools-extension";



const middlewares = [logger];

const store  = createStore(rootReducer, compose(applyMiddleware(...middlewares), devToolsEnhancer({trace:true})))

export default store;