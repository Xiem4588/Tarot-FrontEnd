// index store
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import accountReducer from './account/reducer';

const rootReducer = combineReducers({
  account: accountReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = () => {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  return createStore(rootReducer, middlewareEnhancer);
};

export default configureStore;
