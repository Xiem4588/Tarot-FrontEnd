// src/redux/store.ts
import {createStore, combineReducers} from 'redux';
import likeCardReducer from './reducers/likeCard';
import shareCardReducer from './reducers/shareCard';

// Kết hợp các reducers thành rootReducer
const rootReducer = combineReducers({
  like: likeCardReducer,
  share: shareCardReducer,
  // Khác: nếu bạn có thêm các reducers khác, hãy kết hợp chúng ở đây
});

// Tạo Redux store với rootReducer
const store = createStore(rootReducer);

export default store;
