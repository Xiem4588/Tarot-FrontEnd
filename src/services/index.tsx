import axios, {AxiosError} from 'axios';
import {uri} from './env';
const apiUrlMainnet = uri;

// MAIN CREATE Axios
const axiosClient = axios.create({
  baseURL: apiUrlMainnet,
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
    console.error('Error!', error);
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
    // Xử lý phản hồi từ máy chủ khi có lỗi
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Handle response error
        const axiosError = error as AxiosError;
        console.log('Response Data:', axiosError.response?.data);
        console.log('Response Status:', axiosError.response?.status);
        console.log('Response Headers:', axiosError.response?.headers);
      } else if (error.request) {
        // Handle request error
        console.log('Request:', (error as AxiosError).request);
      } else {
        // Handle other errors
        console.log('Error:', (error as Error).message);
      }
    } else {
      console.log('Non-Axios Error:', (error as Error).message);
    }
    throw error; // Re-throw the error
  }
};

// ************ PUT update user
export const apiUpdateAccount = async (
  routes: string,
  data: object,
  token: string,
) => {
  try {
    const url = `/users/${routes}`;
    const tempAxiosClient = axios.create({
      baseURL: apiUrlMainnet,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await tempAxiosClient.put(url, data);
    return res.data;
  } catch (error) {
    throw error; // Re-throw the error
  }
};

// ************ khac
