// src/redux/types.ts
export type RootState = {
  like: LikeState;
};

export type LikeState = {
  likedCards: string[];
};
