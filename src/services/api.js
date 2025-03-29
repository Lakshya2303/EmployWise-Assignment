import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

export const login = async (email, password) => {
  try {
    const res = await axios.post(`${BASE_URL}/login`, { email, password });
    return res.data;
  } catch (err) {
    throw err.response.data.error;
  }
};

export const getUsers = async (page) => {
    const res = await axios.get(`${BASE_URL}/users?page=${page}&per_page=3`);
    return res.data;
};

export const getUserById = async (id) => {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    return response.data.data;
};
  
export const updateUser = async (id, userData) => {
    const res = await axios.put(`${BASE_URL}/users/${id}`, userData);
    return res.data;
};
  
export const deleteUser = async (id) => {
    await axios.delete(`${BASE_URL}/users/${id}`);
};
  
  