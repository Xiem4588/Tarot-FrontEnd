import {
  AccountState,
  AccountActionTypes,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOG_OUT,
} from './types';

const initialState: AccountState = {
  error: null,
  loading: false,
  token: null,
  user: null,
};

const accountReducer = (state = initialState, action: AccountActionTypes) => {
  console.log('----> action account: ', action.type);
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
        token: action.payload,
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
