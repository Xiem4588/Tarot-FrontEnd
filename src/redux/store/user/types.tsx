// Khai bao kieu du lieu: https://www.youtube.com/watch?v=PE5swrHeXow&list=PLRhlTlpDUWszyvcZatbnMIAVDBmLr_7kc&index=9
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const DETAIL_USER = 'DETAIL_USER';
export const LOG_OUT = 'LOG_OUT';

// Type user
export interface AuthenticatedUser {
  _id?: string;
  email?: string;
  tel?: string;
  password?: string;
  fullName?: string;
  dateOfBirth?: string;
  desc?: string;
  avatar?: string;
  priceList?: string[];
}

// Type price pack
interface PriceListData {
  title: string;
  desc: string;
  price: string;
  time: string;
}
export interface AccountState {
  loading?: boolean; //check xem login xong chua
  error?: string | null;
  token?: string | null;
  user?: AuthenticatedUser | null;
  priceList?: PriceListData | null;
}

//
export interface LoginRequest {
  type: typeof LOGIN_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}

//
export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: {
    token: string;
    user: AuthenticatedUser;
  };
}

//
export interface LoginFailure {
  type: typeof LOGIN_FAILURE;
  payload: {
    error: string;
  };
}

//
export interface Logout {
  type: typeof LOG_OUT;
}

//
export interface UpdateUser {
  type: typeof UPDATE_USER_SUCCESS;
  payload: {
    user: AuthenticatedUser; // Thông tin người dùng sau khi cập nhật
  };
}
//
export interface DetailUser {
  type: typeof DETAIL_USER;
  payload: {
    user: AuthenticatedUser;
  };
}
