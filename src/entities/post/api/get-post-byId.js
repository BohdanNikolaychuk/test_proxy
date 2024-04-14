import { apiClient } from '../../../shared/api';

export const getPostsByUserId = async queryParams => {
  const result = await apiClient.get('/posts', queryParams);
  return result;
};
