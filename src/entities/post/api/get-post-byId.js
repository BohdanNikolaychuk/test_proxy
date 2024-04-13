import { apiClient } from '../../../shared/api';

export const getPostsById = async ({ queryParams }) => {
  const result = await apiClient.get('/posts', queryParams);
  return result;
};
