import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { requisitionReducer } from './requisitionReducer';
import { reducer as FormReducer } from 'redux-form';


let reducers = combineReducers({
    applications: requisitionReducer,
    form: FormReducer
})

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnchancers(applyMiddleware(thunkMiddleware)));


window.__store__ = store;
export default store;