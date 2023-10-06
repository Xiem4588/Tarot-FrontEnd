// Khai bao kieu du lieu: https://www.youtube.com/watch?v=PE5swrHeXow&list=PLRhlTlpDUWszyvcZatbnMIAVDBmLr_7kc&index=9
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const ADD_PRICEPACK_SUCCESS = 'ADD_PRICEPACK_SUCCESS';
export const DETAIL_USER = 'DETAIL_USER';
export const LOG_OUT = 'LOG_OUT';

// khai bao user
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

// khai bao price pack
export interface PriceListData {
  title: string;
  desc: string;
  price: string;
  time: string;
}

// khai bao mot bang cua store de check moi noi trong ung dung
export interface AccountState {
  loading?: boolean; //check xem login xong chua
  error?: string | null;
  token?: string | null;
  user?: AuthenticatedUser | null;
  priceList?: PriceListData | null;
}
