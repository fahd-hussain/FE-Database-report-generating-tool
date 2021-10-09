const axios = require('axios');
const APP_BASE_URI = 'http://192.168.0.111:4000';

export const PostRequest = async ({ url, body }) => {
  try {
    const uri = `${APP_BASE_URI}/${url}`;
    const response = await axios.post(uri, body);
    if (response.data) return response.data;
  } catch (error) {
    throw error
  }
}

export const PostRequestWithToken = async ({ url, body }) => {
  try {
    const uri = `${APP_BASE_URI}/${url}`;
    const response = await axios.post(uri, body);
    if (response.data) return response.data;
  } catch (error) {
    throw error
  }
}

export const GetRequestWithToken = async ({ url }) => {
  try {
    const uri = `${APP_BASE_URI}/${url}`;
    const response = await axios.get(uri);
    if (response.data) return response.data;
  } catch (error) {
    throw error
  }
}