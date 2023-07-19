interface LikeState {
  id: string;
  total: number;
  status: boolean;
}
const initState: LikeState = {
  id: '',
  total: 0,
  status: false,
};

const likeReducer = (state = initState, action: {type: string}): LikeState => {
  switch (action.type) {
    case 'LIKE':
      return {
        ...state,
        status: true,
        total: state.total + 1,
      };
    case 'UNLIKE':
      return {
        ...state,
        status: false,
        total: state.total > 0 ? state.total - 1 : 0,
      };
    default:
      return state;
  }
};

export default likeReducer;
