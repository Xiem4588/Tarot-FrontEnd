// action gồm 2 thứ là type và payload:
//+ type là một const
//+ payload là một object chứ dữ liệu

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  UPDATE_USER_SUCCESS,
  ADD_PRICEPACK_SUCCESS,
  LOG_OUT,
  DETAIL_USER,
  PriceListData,
  AuthenticatedUser,
} from './types';

interface LoginRequest {
  type: typeof LOGIN_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}

interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: {
    token: string;
    user: AuthenticatedUser;
  };
}

interface LoginFailure {
  type: typeof LOGIN_FAILURE;
  payload: {
    error: string;
  };
}

interface Logout {
  type: typeof LOG_OUT;
}

// Trong file types.ts hoặc tạo một file actions.ts mới
interface UpdateUserSuccessAction {
  type: typeof UPDATE_USER_SUCCESS;
  payload: {
    user: AuthenticatedUser; // Thông tin người dùng sau khi cập nhật
  };
}
export const updateUserSuccess = (
  user: AuthenticatedUser,
): UpdateUserSuccessAction => ({
  type: UPDATE_USER_SUCCESS,
  payload: {user},
});

// Save userID
interface UserIdAction {
  type: typeof DETAIL_USER;
  payload: {
    user: AuthenticatedUser; // Thông tin người dùng sau khi cập nhật
  };
}

export const detailUserSuccess = (user: AuthenticatedUser): UserIdAction => ({
  type: DETAIL_USER,
  payload: {user},
});

// khai bao price pack
interface addPriceList {
  type: typeof ADD_PRICEPACK_SUCCESS;
  payload: {
    priceList: PriceListData; // Thông tin người dùng sau khi cập nhật
  };
}
export const addPriceListSuccess = (
  priceList: PriceListData,
): addPriceList => ({
  type: ADD_PRICEPACK_SUCCESS,
  payload: {priceList},
});

// export cac interface
export type AccountActionTypes =
  | LoginRequest
  | LoginSuccess
  | LoginFailure
  | UpdateUserSuccessAction
  | UserIdAction
  | addPriceList
  | Logout;
