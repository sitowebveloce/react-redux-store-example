import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
// Import reducer
import {usersReducers} from './reducers/usersReducer';
// Arr
import {data} from './data/arr';
// Reducer
const reducer = combineReducers({
    usersState : usersReducers
});

// MIDDLEWARE
const middleware = [thunk];

// INITIAL STATE
const initialState = {
    usersState: { loading:false, users: data}
}
// Create Store
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

// Export store
export default store;