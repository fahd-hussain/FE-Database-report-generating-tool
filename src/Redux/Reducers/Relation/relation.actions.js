import { GetRequestWithToken } from "../../../Utils/request-handler";
const baseUri = "report/";

const requestRelationsAction = () => ({
  type: "PENDING_RELATIONS",
})

const setRelationsAction = (payload) => ({
  type: "GET_RELATIONS",
  payload,
})

export const getRelations = ({ database_id }) => async (dispatch) => {
  dispatch(requestRelationsAction())
  try {
    const url = `${baseUri}${database_id}/relations`;
    const response = await GetRequestWithToken({ url });
    return dispatch(setRelationsAction(response))
  } catch (error) {
    throw error
  }
};
