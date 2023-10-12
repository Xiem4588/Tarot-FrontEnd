export interface typeUser {
  _id?: string;
  email: string;
  password?: string;
  typeUser?: string;
  desc?: string | undefined;
  fullName?: string | undefined;
  dateOfBirth?: string | undefined;
  tel?: string | undefined;
  intargram?: string | undefined;
  facebook?: string | undefined;
  avatar?: string | undefined;
  priceList?: string[] | undefined;
}

export interface navProps {
  navigation?: any;
  route?: any;
  userID?: string;
  getDataDateTime?: (date: any) => void;
}

export interface ItemProps {
  _id?: string;
  title: string;
  desc: string;
  price: string;
  time: string;
  created_date: string;
}

export interface priceProps {
  getDataPricePack: (price: any) => void;
}
