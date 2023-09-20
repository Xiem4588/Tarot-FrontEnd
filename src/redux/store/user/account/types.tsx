// Khai bao kieu du lieu: https://www.youtube.com/watch?v=PE5swrHeXow&list=PLRhlTlpDUWszyvcZatbnMIAVDBmLr_7kc&index=9
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const DETAIL_USER = 'DETAIL_USER';
export const LOG_OUT = 'LOG_OUT';

// khai bao mot bang cua store de check moi noi trong ung dung
export interface AccountState {
  user: AuthenticatedUser | null;
  loading: boolean; // check xem login xong chua
  error: string | null;
  token: string | null;
}

// khai bao
export interface AuthenticatedUser {
  _id?: string;
  email: string;
  tel?: string;
  fullName?: string;
  dateOfBirth?: string;
  desc?: string;
  avatar?: string;
}

// action gồm 2 thứ là type và payload: type là một const còn payload là một object chứ dữ liệu

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

// export cac interface
export type AccountActionTypes =
  | LoginRequest
  | LoginSuccess
  | LoginFailure
  | UpdateUserSuccessAction
  | UserIdAction
  | Logout;
