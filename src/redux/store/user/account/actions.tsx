import {Dispatch} from 'react';
import {AccountActionTypes, LOGIN_REQUEST} from './types';

export const login = (email: string, password: string) => {
  // Dispatch có kiểu action được khai báo là AccountActionTypes
  return (dispatch: Dispatch<AccountActionTypes>) => {
    dispatch({
      type: LOGIN_REQUEST,
      payload: {
        email: email,
        password: password,
      },
    });
  };
};
