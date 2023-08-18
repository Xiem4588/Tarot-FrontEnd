// src/redux/reducers/shareCard.ts

import {shareAction} from '../actions';
import {shareType} from '../typesState';

const setState: shareType = {
  shareCards: [],
};

const SHARE_CARD = (state = setState, action: shareAction): shareType => {
  // console.log('action SHARE >>>>>>>', action);
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

export default SHARE_CARD;
