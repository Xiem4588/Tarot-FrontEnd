import {Dispatch} from 'react';
import {AccountActionTypes, LOGIN_REQUEST} from './types';

interface userType {
  email: string;
  password: string;
}

export const LoginAction = (user: userType) => {
  // Dispatch có kiểu action được khai báo là AccountActionTypes
  return (dispatch: Dispatch<AccountActionTypes>) => {
    dispatch({
      type: LOGIN_REQUEST,
      payload: {
        email: user.email,
        password: user.password,
      },
    });
  };
};
