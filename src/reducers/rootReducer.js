import userReducer from './userReducer';
import mapReducer from './mapReducer';
import loadingReducer from './loadingReducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({user: userReducer, map: mapReducer}) 
    

export default rootReducer;