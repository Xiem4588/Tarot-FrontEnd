// action gồm 2 thứ là type và payload: + type là một const + payload là một object chứ dữ liệu
import {
  UPDATE_USER_SUCCESS,
  DETAIL_USER,
  AuthenticatedUser,
  LoginRequest,
  LoginSuccess,
  LoginFailure,
  UpdateUser,
  DetailUser,
  Logout,
} from './types';

// Action Update User
export const ActionUpdateUser = (user: AuthenticatedUser) => ({
  type: UPDATE_USER_SUCCESS,
  payload: {user},
});

// Action Save userID
export const ActionDetailUser = (user: AuthenticatedUser) => ({
  type: DETAIL_USER,
  payload: {user},
});

// export cac interface
export type ACTIONS_REDUCER =
  | LoginRequest
  | LoginSuccess
  | LoginFailure
  | UpdateUser
  | DetailUser
  | Logout;
