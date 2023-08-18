// src/redux/reducers/shareCard.ts

import {tokenUser} from '../actions';
import {tokenType} from '../typesState';

const initialState: tokenType = {
  data: {
    email: '',
    typeUser: '',
    token: '',
  },
};

const TOKEN_USER = (state = initialState, action: tokenUser): tokenType => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      const newData = {
        ...state.data,
        email: action.payload.email,
        typeUser: action.payload.typeUser,
        token: action.payload.token,
      };
      return {
        data: newData,
      };
    default:
      return state;
  }
};

export default TOKEN_USER;
