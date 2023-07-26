// src/redux/reducers/shareCard.ts

import {ShareAction} from '../actions';
import {ShareCard} from '../state';

const setState: ShareCard = {
  shareCards: [],
};

const shareCardReducer = (state = setState, action: ShareAction): ShareCard => {
  console.log('action SHARE >>>>>>>', action);
  switch (action.type) {
    case 'SHARE':
      const cardIdExistsInShare = state.shareCards.includes(
        action.payload.cardId,
      );
      if (cardIdExistsInShare) {
        return state; // If the cardId already exists, return the current state unchanged.
      } else {
        return {
          ...state,
          shareCards: [
            ...state.shareCards,
            action.payload.userID,
            action.payload.cardId,
            action.payload.typeCard,
          ],
        };
      }
    default:
      return state;
  }
};

export default shareCardReducer;
