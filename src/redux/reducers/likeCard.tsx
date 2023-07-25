// src/redux/reducers/likeCard.ts

import {LikeAction} from '../actions';
import {LikeCard} from '../typesState';

const initState: LikeCard = {
  likedCards: [],
};

const likeCardReducer = (state = initState, action: LikeAction): LikeCard => {
  console.log('action LIKE >>>>>>>', action);
  switch (action.type) {
    case 'LIKE':
      return {
        ...state,
        likedCards: [
          ...state.likedCards,
          action.payload.cardId,
          action.payload.typeCard,
        ],
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

export default likeCardReducer;
