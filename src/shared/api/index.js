import { API_URL } from '../config';

class ApiClient {
  constructor(url) {
    this.baseUrl = url;
  }

  async handleResponse(response) {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    try {
      return await response.json();
    } catch (error) {
      throw new Error('Error parsing JSON response');
    }
  }

  async get(endpoint, queryParams) {
    const url = new URL(endpoint, this.baseUrl);
    console.log('queryParams', queryParams);
    if (queryParams) {
      Object.entries(queryParams).forEach(([key, value]) => {
        url.searchParams.append(key, value.toString());
      });
    }
    console.log('URL', url.toString());
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return this.handleResponse(response);
  }
}

export const apiClient = new ApiClient(API_URL);
