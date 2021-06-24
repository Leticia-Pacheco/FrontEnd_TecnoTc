import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://tecnotcc.herokuapp.com/',
});