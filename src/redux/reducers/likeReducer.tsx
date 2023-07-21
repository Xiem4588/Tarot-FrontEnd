// src/redux/reducers/likeReducer.ts
import {LikeAction} from '../actions';
import {LikeState} from '../types';

const initState: LikeState = {
  likedCards: [],
};

const likeReducer = (state = initState, action: LikeAction): LikeState => {
  console.log('action >>>>>>>', action);
  switch (action.type) {
    case 'LIKE':
      return {
        ...state,
        likedCards: [...state.likedCards, action.payload.cardId],
      };
    case 'UNLIKE':
      return {
        ...state,
        likedCards: state.likedCards.filter(
          cardId => cardId !== action.payload.cardId,
        ),
      };
    default:
      return state;
  }
};

export default likeReducer;
