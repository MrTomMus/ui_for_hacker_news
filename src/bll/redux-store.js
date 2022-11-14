import { combineReducers, createStore} from 'redux';
import mainReducer from './main-reducer.js'

let redusers = combineReducers({
    main: mainReducer,
    
})

let store = createStore(redusers)

export default store;