// config file common Api

import axios from 'axios';
const apiUrlMainnet = 'http://localhost:3002';

const axiosClient = axios.create({
  baseURL: apiUrlMainnet,
  headers: {'Content-Type': 'application/json'},
});

// ************ Get Cards
export const getCards = async (routes: string) => {
  try {
    const url = `/${routes}`;
    const response = await axiosClient.get(url);
    return response;
  } catch (error) {
    console.error('Error while fetching cards:', error);
    throw error;
  }
};

// ************ khac
