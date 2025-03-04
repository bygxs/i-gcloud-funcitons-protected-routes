// lib/api.ts
const BASE_URL = '/api'; // Or your Cloud Function URL

export const callCloudFunction = async (endpoint: string, token: string, method = 'GET', body?: any) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API call error:', error);
    throw error; // Rethrow to handle in the component
  }
};