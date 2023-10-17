// user detail
import {AccountState, DETAIL_USER} from './types';
import {ACTIONS_REDUCER} from './actions';

const DetailState: AccountState = {
  error: null,
  loading: false,
  token: null,
  user: null,
  priceList: null,
};

const PUBLIC_STORE_USER_DETAIL = (
  state = DetailState,
  action: ACTIONS_REDUCER,
) => {
  switch (action.type) {
    case DETAIL_USER:
      return {
        ...state,
        loading: false,
        user: action.payload.user, // Cập nhật thông tin người dùng mới
        error: null,
      };
    default:
      return state;
  }
};

export default PUBLIC_STORE_USER_DETAIL;
