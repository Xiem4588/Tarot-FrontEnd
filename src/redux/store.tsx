// src/redux/store.ts
import {createStore, combineReducers, Store} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // Để lưu trạng thái vào localStorage cho web
import AsyncStorage from '@react-native-async-storage/async-storage'; // Sử dụng AsyncStorage cho React Native
import likeCardReducer from './reducers/likeCard'; // Import reducer của likeCard
import shareCardReducer from './reducers/shareCard'; // Import reducer của shareCard
import {RootState} from './state'; // Import kiểu RootState từ file state.ts

// Kết hợp các reducers thành rootReducer
const rootReducer = combineReducers({
  like: likeCardReducer,
  share: shareCardReducer,
  // Nếu bạn có thêm các reducers khác, hãy kết hợp chúng ở đây
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
