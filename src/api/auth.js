import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

const deleteToken = () => {
  delete axios.defaults.headers.common['Authorization']
};

export async function signUp(body) {
  const { data } = await axios.post(`users/signup`, body);
  setToken(data.token);
  return data;
}

export async function signIn(body) {
  const { data } = await axios.post(`users/login`, body);
  setToken(data.token);
  return data;
}

export async function refresh() {
  const { data } = await axios.get(`users/current`);
  return data;
}

export async function logOut() {
  await axios.post(`users/logout`);
  deleteToken()
}