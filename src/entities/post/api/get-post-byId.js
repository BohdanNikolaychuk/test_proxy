import { apiClient } from '../../../shared/api';

export const getPostsByUserId = async queryParams => {
  console.log('queryParams', queryParams);

  const { params } = queryParams;
  const result = await apiClient.get('/posts', params);
  return result;
};
