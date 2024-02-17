/* eslint-disable prettier/prettier */

import {appInfos} from '../constants/appInfos';
import axiosClient from './axiosClient';

/* eslint-disable @typescript-eslint/no-unused-vars */
class AuthAPI {
  HandleAuthentication = async (
    url: string,
    data?: any,
    method?: 'get' | 'post' | 'put' | 'delete',
  ) => {
    return await axiosClient(`${appInfos.BASE_URL}/auth/${url}`, {
      method: method ?? 'get',
      data,
    });
  };
}

const authenticationAPI = new AuthAPI();
export default authenticationAPI;
