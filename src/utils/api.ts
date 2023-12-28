import axios from 'axios';
import {API_URL} from '@env';

const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.response.use(
  response => {
    const {data} = response;

    return data;
  },
  error => {
    return Promise.reject(error);
  },
);

const api = async (
  method: ApiMethods,
  url: string,
  data?: ApiPayload,
  options = {},
) => {
  let payload = {};

  if (method === 'get' || method === 'delete') {
    Object.assign(payload, {params: data});
  } else {
    Object.assign(payload, {data});
  }

  return await instance({
    method: method,
    url: url,
    ...payload,
    ...options,
  });
};

export default api;
