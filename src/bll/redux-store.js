import { combineReducers, createStore} from 'redux';
import mainScreenReducer from './mainScreen-reducer.js';
import pageNewsReducer from './mainScreen-reducer.js';
import mainReducer from './main-reducer.js'

let redusers = combineReducers({
    main: mainReducer,
    
})

let store = createStore(redusers)

export default store;