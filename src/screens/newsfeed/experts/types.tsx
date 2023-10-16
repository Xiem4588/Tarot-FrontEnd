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
  like?: string | undefined;
  view?: string | undefined;
}

export interface navProps {
  navigation?: any;
  route?: any;
  userID?: string;
}

export interface ItemProps {
  _id?: string;
  title: string;
  desc: string;
  price: string;
  time: string;
  created_date: Date;
}
