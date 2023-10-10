// index store
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {STORE_USER_DETAIL, STORE_ACCOUNT_DATA} from './user/reducer';
import {persistReducer, persistStore} from 'redux-persist'; //lưu trữ và khôi phục dữ liệu từ AsyncStorage khi mo lai app
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  STORE_ACCOUNT_DATA: STORE_ACCOUNT_DATA,
  STORE_USER_DETAIL: STORE_USER_DETAIL,
});

export type AppState = ReturnType<typeof rootReducer>;

// Tạo config cho Redux Persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['STORE_ACCOUNT_DATA', 'STORE_USER_DETAIL'], // Đặt các reducer bạn muốn lưu vào đây
};

// Áp dụng Redux Persist cho rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  // Tạo store từ persistedReducer thay vì rootReducer
  const store = createStore(persistedReducer, middlewareEnhancer);
  const persistor = persistStore(store);

  return {store, persistor};
};

export default configureStore;
