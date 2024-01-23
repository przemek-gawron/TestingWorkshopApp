import axios, {AxiosResponse} from 'axios';

export const api = axios.create({
  baseURL: 'https://randomuser.me/api/?results=30',
});

export const getUsers = (): Promise<AxiosResponse<undefined>> => api.get('');
