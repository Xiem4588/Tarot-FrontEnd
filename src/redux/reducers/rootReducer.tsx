import {combineReducers} from 'redux';
import likeReducer from './likeReducer';

const rootReducer = combineReducers({
  like: likeReducer,
});

export {rootReducer};
