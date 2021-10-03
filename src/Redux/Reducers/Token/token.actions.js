const setTokenAction = (token) => ({
  type: "SET_TOKEN",
  payload: token,
})

// --------------------------------------------------------------------------- //
export const setToken = (token) => (dispatch) => dispatch(setTokenAction(token));
