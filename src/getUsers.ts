import axios, {AxiosResponse} from 'axios';
import {UserResponseType} from 'getUser.types';

export const api = axios.create({
  baseURL: 'https://randomuser.me/api/?results=30',
});

export interface UsersReponse {}

export const getUsers = (): Promise<AxiosResponse<UserResponseType>> =>
  api.get('');
