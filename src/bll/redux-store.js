import { combineReducers, createStore} from 'redux';
import mainScreenReducer from './main-screen-reducer.js';
import pageNewsReducer from './main-screen-reducer.js';


let redusers = combineReducers({
    mainScreen: mainScreenReducer,
    // pageNews: pageNewsReducer,
})

let store = createStore(redusers)

export default store;