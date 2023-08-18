// src/redux/action.ts
import {userData} from './typesState';

export type likeAction = {
  type: 'LIKE' | 'UNLIKE' | 'RANDOM_CARD';
  payload: {
    cardId: string;
    typeCard: string;
  };
};

export type shareAction = {
  type: 'SHARE';
  payload: {
    userID: string;
    cardId: string;
    typeCard: string;
  };
};

// Sử dụng lại kiểu dữ liệu User ở đây
export type tokenUser = {
  type: 'LOGIN_SUCCESS';
  payload: userData;
};
