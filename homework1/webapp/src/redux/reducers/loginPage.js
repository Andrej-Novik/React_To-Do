import { ERROR_AUTH, SET_TOKEN, DELETE_TOKEN } from "../actionTypes/login";

const initialState = {
  error: "",
  token: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_AUTH: {
      return {
        ...state,
        error: action.error,
      };
    }
    case SET_TOKEN: {
      return {
        ...state,
        token: action.value,
      };
    }
    case DELETE_TOKEN: {
      return {
        ...state,
        token: null,
      };
    }
    default:
      return state;
  }
};

export default users;
