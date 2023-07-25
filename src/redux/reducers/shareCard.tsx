// src/redux/reducers/shareCard.ts

import {ShareAction} from '../actions';
import {ShareCard} from '../typesState';

const State: ShareCard = {
  shareCards: [],
};

const shareCardReducer = (state = State, action: ShareAction): ShareCard => {
  console.log('action SHARE >>>>>>>', action);
  switch (action.type) {
    case 'SHARE':
      return {
        ...state,
        shareCards: [...state.shareCards, action.payload.cardId],
      };
    default:
      return state;
  }
};

export default shareCardReducer;
