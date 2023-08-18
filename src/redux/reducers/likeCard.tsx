// src/redux/reducers/likeCard.ts

import {likeAction} from '../actions';
import {likeType} from '../typesState';

const setState: likeType = {
  likedCards: [],
};

const LIKE_CARD = (state = setState, action: likeAction): likeType => {
  // console.log('action LIKE >>>>>>>', action);
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

export default LIKE_CARD;
