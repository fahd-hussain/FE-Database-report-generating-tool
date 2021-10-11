import { GetRequestWithToken } from "../../../Utils/request-handler";
const baseUri = "database";

const requestDatabaseAction = () => ({
  type: "PENDING_DATABASE",
})

const setDatabasesAction = (payload) => ({
  type: "GET_DATABASES",
  payload,
})

export const getDatabases = () => async (dispatch) => {
  dispatch(requestDatabaseAction())
  try {
    const response = await GetRequestWithToken({ url: baseUri });
    return dispatch(setDatabasesAction(response))
  } catch (error) {
    throw error
  }
};
