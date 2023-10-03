// user detail
import {AccountState, DETAIL_USER} from './types';
import {AccountActionTypes} from './actions';

const detailState: AccountState = {
  error: null,
  loading: false,
  token: null,
  user: null,
  pricePack: null,
};

const USERDETAIL = (state = detailState, action: AccountActionTypes) => {
  switch (action.type) {
    case DETAIL_USER:
      return {
        ...state,
        loading: false,
        user: action.payload.user, // Cập nhật thông tin người dùng mới
        error: null,
      };
    default:
      return state;
  }
};

export default USERDETAIL;
