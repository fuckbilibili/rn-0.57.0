import {combineReducers} from 'redux';
// import {name} from './name';
import {user} from './user';
import {token} from './token';

export default combineReducers({user,token});