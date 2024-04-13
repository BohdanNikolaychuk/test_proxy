import { apiClient } from '../../../shared/api';

export const getPosts = async () => {
  const result = await apiClient.get('/posts');
  return result;
};
