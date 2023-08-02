// config file common Api

import axios from 'axios';
const apiUrlMainnet = 'http://localhost:3002';

const axiosClient = axios.create({
  baseURL: apiUrlMainnet,
  headers: {'Content-Type': 'application/json'},
});

// ************ Get API apiCategory
export const apiCategory = async (routes: string) => {
  try {
    const url = `/${routes}`;
    const response = await axiosClient.get(url);
    return response;
  } catch (error) {
    console.error('Error!', error);
    throw error;
  }
};

// ************ Post API apiUser: login, register
export const apiUser = async (routes: string, data: object) => {
  try {
    const url = `/users/${routes}`;
    const response = await axiosClient.post(url, data);
    return response;
  } catch (error) {
    console.error('Lỗi khi tìm nạp thẻ: ', error);
    throw error;
  }
};

// ************ khac
