// src/redux/types.ts
export type RootState = {
  like: LikeCard;
  share: ShareCard;
};

export type LikeCard = {
  likedCards: string[];
};

export type ShareCard = {
  shareCards: string[];
};
