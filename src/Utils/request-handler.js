const axios = require('axios');
const APP_BASE_URI = 'http://192.168.0.106:4000';

export const PostRequest = ({ url, body }) => {
  try {
    const uri = `${APP_BASE_URI}/${url}`;
    const response = axios.post(uri, body);
    return response;
  } catch (error) {
    throw error
  }
}

export const PostRequestWithToken = async ({ url, data }) => {
  try {
    const uri = `${APP_BASE_URI}/${url}`;
    const response = await axios.post(uri, { data });
    return response;
  } catch (error) {
    throw error
  }
}

export const GetRequestWithToken = async ({ url }) => {
  try {
    const uri = `${APP_BASE_URI}/${url}`;
    const response = await axios.get(uri);
    return response;
  } catch (error) {
    throw error
  }
}