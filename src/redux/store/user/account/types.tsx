// Khai bao kieu du lieu: https://www.youtube.com/watch?v=PE5swrHeXow&list=PLRhlTlpDUWszyvcZatbnMIAVDBmLr_7kc&index=9
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOG_OUT = 'LOG_OUT';

export interface AuthenticatedUser {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  tel: number;
  avatar: string;
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

// khai bao mot bang cua store de check moi noi trong ung dung
export interface AccountState {
  user: AuthenticatedUser | null;
  loading: boolean; // check xem login xong chua
  error: string | null;
  token: string | null;
}

// export cac interface
export type AccountActionTypes =
  | LoginRequest
  | LoginSuccess
  | LoginFailure
  | Logout;
