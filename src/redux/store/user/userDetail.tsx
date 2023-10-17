// user detail
import {DETAIL_USER, AccountState} from './types';
import {ACTIONS_REDUCER} from './actions';

const DetailState: AccountState = {
  loading: false,
  error: null,
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
        user: action.payload.user,
        error: null,
      };
    default:
      return state;
  }
};

export default PUBLIC_STORE_USER_DETAIL;
