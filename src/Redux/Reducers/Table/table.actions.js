import { GetRequestWithToken } from "../../../Utils/request-handler";
const baseUri = "report/";

const requestTablesAction = () => ({
  type: "PENDING_TABLES",
})

const setTablesAction = (payload) => ({
  type: "GET_TABLES",
  payload,
})

export const getTables = ({ database_id }) => async (dispatch) => {
  dispatch(requestTablesAction())
  try {
    const url = `${baseUri}${database_id}/tables`;
    const response = await GetRequestWithToken({ url });
    return dispatch(setTablesAction(response))
  } catch (error) {
    throw error
  }
};
