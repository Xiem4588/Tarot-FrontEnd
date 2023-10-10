export interface typeUser {
  _id: string;
  fullName: string;
  email: string;
  dateOfBirth: string;
  desc: string;
  typeUser: string;
  avatar: any;
  like: string;
  view: string;
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
  created_date: string;
}
