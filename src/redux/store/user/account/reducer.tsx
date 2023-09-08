import {
  AccountState,
  AccountActionTypes,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  UPDATE_USER_SUCCESS,
  LOG_OUT,
} from './types';

const initialState: AccountState = {
  error: null,
  loading: false,
  token: null,
  user: null,
};

const accountReducer = (state = initialState, action: AccountActionTypes) => {
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
        user: action.payload.user, // Cập nhật thông tin người dùng mới
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

export default accountReducer;
