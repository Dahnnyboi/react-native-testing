import api from 'utils/api';

export const createUser = (formData: UserModel) =>
  api('post', '/user/signup', formData);
