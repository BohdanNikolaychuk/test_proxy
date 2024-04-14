import { apiClient } from '../../../shared/api';

export const getAlbumsByUserId = async queryParams => {
  const result = await apiClient.get('/albums', queryParams);
  return result;
};
