import { combineReducers } from 'redux';
import todos from './todos-reducer';
import visibilityFilter from './visibility-reducer';

export default combineReducers({ todos, visibilityFilter });