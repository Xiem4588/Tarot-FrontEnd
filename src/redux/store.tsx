// src/redux/store.ts
import {createStore, combineReducers, Store} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

// Lưu AsyncStorage (tương đươnglocalStorage cho web) cho React Native
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import reducers
import LIKE_CARD from './reducers/likeCard';
import SHARE_CARD from './reducers/shareCard';
import TOKEN_USER from './reducers/tokenUser';

// Import kiểu RootState từ file state.ts
import {RootState} from './typesState';

// Kết hợp các reducers thành rootReducer
const rootReducer = combineReducers({
  likeData: LIKE_CARD, // tên likeData phải được đặt trùng với tên ở file typeState.ts
  shareData: SHARE_CARD,
  userData: TOKEN_USER,
  // reducers khác,
});

// Cấu hình Redux Persist cho rootReducer
const persistConfig = {
  key: 'root', // Khóa để lưu trạng thái vào localStorage
  storage: AsyncStorage, // Sử dụng localStorage cho web
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tạo Redux store với persistedReducer
const store: Store<RootState> = createStore(persistedReducer);

// Tạo Persistor để lưu trạng thái vào Local Storage
const persistor = persistStore(store);

export {store, persistor};
