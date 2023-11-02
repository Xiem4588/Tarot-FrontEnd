import axios from 'axios';
import {hot} from './env';

// MAIN CREATE Axios
const axiosClient = axios.create({
  baseURL: hot,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ************ GET routes
export const getRoutesMain = async (routes: string) => {
  try {
    const url = `/${routes}`;
    const res = await axiosClient.get(url);
    return res;
  } catch (error) {
    console.error('Có lỗi nghiêm trọng!', error);
    throw error;
  }
};

// ************ GET Type User
export const getTypeUser = async (routes: string) => {
  try {
    const url = `/users/${routes}`;
    const res = await axiosClient.get(url);
    return res;
  } catch (error) {
    console.error('Không lấy được user!', error);
    throw error;
  }
};

// ************ POST(Tạo mới) users routes(login, register,...)
export const postUserAccount = async (routes: string, data: object) => {
  try {
    const url = `/users/${routes}`;
    const res = await axiosClient.post(url, data);
    return res;
  } catch (error) {
    throw error;
  }
};

// ************ PUT(Cập nhật hoặc thay thế) update user & Expert add price pack
export const putUpdateAccount = async (
  routes: string,
  data: object,
  token: string,
) => {
  try {
    const url = `/users/${routes}`;
    const updateAccount = axios.create({
      baseURL: hot,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await updateAccount.put(url, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// ************ POST(Tạo mới) add Image to server
export const postImageServer = async (routes: string, data: any) => {
  try {
    const url = `/upload/${routes}`;
    const imageServer = axios.create({
      baseURL: hot,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const res = await imageServer.post(url, data);
    return res;
  } catch (error) {
    console.error('Lỗi không thể lưu ảnh!', error);
    throw error;
  }
};

// ************ POST(Tạo mới) User booking Expert
export const postUserBooking = async (
  routes: string,
  data: object,
  token: string,
) => {
  try {
    const url = `/booking/${routes}`;
    const updateAccount = axios.create({
      baseURL: hot,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await updateAccount.post(url, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// ************ GET user booking
export const getTypeBooking = async (routes: string, data: object) => {
  try {
    const url = `/booking/${routes}`;
    const res = await axiosClient.post(url, data);
    return res;
  } catch (error) {
    throw error;
  }
};

// ************ khac
