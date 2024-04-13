import { apiClient } from '../../../shared/api';

export const getUsers = async () => {
  const result = await apiClient.get('/users');
  return result;
};
