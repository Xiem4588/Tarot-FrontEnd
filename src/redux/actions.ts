// src/redux/action.ts

export type LikeAction = {
  type: 'LIKE' | 'UNLIKE' | 'RANDOM_CARD';
  payload: {
    cardId: string;
    typeCard: string;
  };
};

export type ShareAction = {
  type: 'SHARE';
  payload: {
    userID: string;
    cardId: string;
    typeCard: string;
  };
};
