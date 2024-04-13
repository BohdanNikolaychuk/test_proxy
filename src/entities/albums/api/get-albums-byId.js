import { apiClient } from '../../../shared/api'

export const getAlbumsByUserId = async queryParams => {
  const { params } = queryParams
  const result = await apiClient.get('/albums', params)
  return result
}
