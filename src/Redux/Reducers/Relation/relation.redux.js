const initialState = {
  loading: false,
  relation: [],
  error: null,
}

export const relationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PENDING_RELATIONS":
      return {
        ...state,
        loading: true,
      }

    case "GET_RELATIONS":
      return {
        ...state,
        loading: false,
        relation: action.payload,
      };

    case "FAILED_RELATIONS":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};