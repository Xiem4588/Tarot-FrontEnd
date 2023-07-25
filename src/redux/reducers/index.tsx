// src/redux/reducers/index.js

import {combineReducers} from 'redux';
import likeCardReducer from './likeCard';
import shareCardReducer from './shareCard';

// Kết hợp các reducers thành rootReducer
const rootReducer = combineReducers({
  like: likeCardReducer,
  share: shareCardReducer,
  // Khác: nếu bạn có thêm các reducers khác, hãy kết hợp chúng ở đây
});

export default rootReducer;
