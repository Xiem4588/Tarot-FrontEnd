// src/redux/store.ts
import {createStore, combineReducers} from 'redux';
import likeReducer from './reducers/likeReducer';
import {RootState} from './types';

const rootReducer = combineReducers<RootState>({
  like: likeReducer,
});

const store = createStore(rootReducer);

export default store;
