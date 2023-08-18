// src/redux/types.ts
export type RootState = {
  likeData: likeType; // tên likeData phải được đặt trùng với tên ở file store.ts
  shareData: shareType;
  userData: tokenType;
};

export type likeType = {
  likedCards: string[];
};

export type shareType = {
  shareCards: string[];
};

// lưu trữ các thông tin về người dùng sau khi đăng nhập
export type userData = {
  email: string;
  typeUser: string;
  token: string;
  // ... other fields
};
export type tokenType = {
  data: userData; //   data: YourDataType[]; // Thay YourDataType bằng kiểu dữ liệu bạn muốn lưu trữ
};
