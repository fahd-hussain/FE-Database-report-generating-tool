const initialState = {
  loading: false,
  database: [],
  error: null,
}

export const databaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PENDING_DATABASE":
      return {
        ...state,
        loading: true,
      }

    case "GET_DATABASES":
      return {
        error: null,
        loading: false,
        database: action.payload,
      };

    default:
      return state;
  }
};