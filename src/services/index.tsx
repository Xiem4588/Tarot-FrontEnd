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
export const apiRoutesMain = async (routes: string) => {
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

// ************ GET routes
export const getUSERDETAIL = async (routes: string) => {
  try {
    const url = `/users/${routes}`;
    const res = await axiosClient.get(url);
    return res;
  } catch (error) {
    console.error('Không lấy được user!', error);
    throw error;
  }
};

// ************ POST users routes(login, register,...)
export const apiAccount = async (routes: string, data: object) => {
  try {
    const url = `/users/${routes}`;
    const res = await axiosClient.post(url, data);
    return res;
  } catch (error) {
    throw error;
  }
};

// ************ PUT update user & Expert add price pack
export const apiUpdateAccount = async (
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
    throw error; // Re-throw the error
  }
};

// ************ POST save Image to server
export const saveImageServer = async (routes: string, data: any) => {
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
// ************ khac
