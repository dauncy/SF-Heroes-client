import userReducer from './userReducer';
import loadingReducer from './loadingReducer'
import { combineReducers } from 'redux';


const rootReducer = combineReducers({user: userReducer}) 
    

export default rootReducer;