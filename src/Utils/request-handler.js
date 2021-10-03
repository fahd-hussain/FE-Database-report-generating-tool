const axios = require('axios');

export const PostRequest = ({ url, body }) => {
  try {
    const response = axios.post(url, body);
    return response;
  } catch (error) {
    throw error
  }
}

export const PostRequestWithToken = async ({ url, data }) => {
  try {
    const response = await axios.post(url, { data });
    return response;
  } catch (error) {
    throw error
  }
}

export const GetRequestWithToken = async ({ url }) => {
  try {
    debugger
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw error
  }
}