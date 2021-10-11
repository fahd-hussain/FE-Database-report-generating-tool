const initialState = {
  loading: false,
  table: [],
  error: null,
}

export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PENDING_TABLES":
      return {
        ...state,
        loading: true,
      }

    case "GET_TABLES":
      return {
        ...state,
        loading: false,
        table: action.payload,
      };

    case "FAILED_TABLES":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};