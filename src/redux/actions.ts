// src/redux/action.ts
export type LikeAction = {
  type: 'LIKE' | 'UNLIKE' | 'RANDOM_CARD';
  payload: {
    cardId: string;
    typeCard: string;
  };
};
