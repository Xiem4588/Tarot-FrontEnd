import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  UPDATE_USER_SUCCESS,
  LOG_OUT,
  AccountState,
} from './types';
import {ACTIONS_REDUCER} from './actions';

const UserDataState: AccountState = {
  error: null,
  loading: false,
  token: null,
  user: null,
  priceList: null,
};

const PRIVATE_STORE_ACCOUNT_DATA = (state = UserDataState, action: ACTIONS_REDUCER) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token, // Lưu token vào trạng thái
        user: action.payload.user, // Lưu thông tin người dùng vào trạng thái
        error: null,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user, // aupdate user
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        token: null,
        error: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
        token: null,
      };
    default:
      return state;
  }
};

export default PRIVATE_STORE_ACCOUNT_DATA;
