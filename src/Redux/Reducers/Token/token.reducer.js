const token = ""

export const tokenReducer = (state = token, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return state = action.payload

    default:
      return state;
  }
};