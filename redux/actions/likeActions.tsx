interface LikeAction {
  type: string;
}

export const like = (): LikeAction => {
  return {
    type: 'LIKE',
  };
};

export const unlike = (): LikeAction => {
  return {
    type: 'UNLIKE',
  };
};
