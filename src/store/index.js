import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';

//import reducers
import auth from './auth/reducer';

//combine reducers
const rootReducer = combineReducers({
   auth
});

//apply middleware
const middleware = [reduxThunk, logger];
const enhancers = applyMiddleware(...middleware);

export default createStore(rootReducer, composeWithDevTools(enhancers));