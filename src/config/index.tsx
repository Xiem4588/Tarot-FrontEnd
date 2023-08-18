// config file common Api
import axios from 'axios';
// config .env nhung chua dc
// import Config from 'react-native-config';
// const BASE_URL = Config.BASE_URL;
// console.log('BASE_URL', BASE_URL);

// tam dung url
const apiUrlMainnet = 'http://localhost:3002';
const axiosClient = axios.create({
  baseURL: apiUrlMainnet,
  headers: {'Content-Type': 'application/json'},
});

// ************ Get API apiRoutesMain
export const apiRoutesMain = async (routes: string) => {
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
  } catch (error: any) {
    // Xử lý phản hồi từ máy chủ khi có lỗi
    const {response} = error;
    if (response) {
      throw response; // Ném lại lỗi để xử lý bên ngoài (nếu cần)
    } else {
      console.error('Lỗi API không tồn tại', error);
      throw error; // Ném lại lỗi nếu không có phản hồi từ máy chủ
    }
  }
};

// ************ khac
