import { v4 as uuidv4 } from "uuid";
import {
  OPEN_MODAL,
  CLOSE_MODAL,
  DELETE_USER,
  SET_CURRENT_USER,
  CHANGE_USER,
  ADD_USER,
  CHANGE_USERS_LOADER,
  ERROR_GETTING_USERS,
  USER_LIST_SUCCESS,
} from "../actionTypes/users";

const initialState = {
  isModalOpen: false,
  currentUser: { id: null, firstName: "", lastName: "" },
  userLoader: false,
  isError: false,
  users: [
    //{ id: uuidv4(), firstName: "Ivan", lastName: "Nefedov" },
    //{ id: uuidv4(), firstName: "Nikita", lastName: "Zalubov" },
    //{ id: uuidv4(), firstName: "Andrew", lastName: "Taranow" },
    //{ id: uuidv4(), firstName: "Mihail", lastName: "Ptuskin" },
    //{ id: uuidv4(), firstName: "Artem", lastName: "Haliman" },
  ],
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        isModalOpen: true,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        isModalOpen: false,
        currentUser: {},
      };
    }
    case SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: {
          id: action.id,
          firstName: action.firstName,
          lastName: action.lastName,
        },
        isModalOpen: true,
      };
    }
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.userId),
        isModalOpen: false,
      };
    case CHANGE_USER: {
      let firstName = action.firstName;
      let lastName = action.lastName;
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, firstName, lastName } : user
        ),
        isModalOpen: false,
        currentUser: {},
      };
    }
    case ADD_USER: {
      let firstName = action.firstName;
      let lastName = action.lastName;
      return {
        ...state,
        users: [...state.users, { id: uuidv4(), firstName, lastName }],
        isModalOpen: false,
        currentUser: {},
      };
    }
    case CHANGE_USERS_LOADER: {
      return {
        ...state,
        userLoader: action.value,
      };
    }
    case ERROR_GETTING_USERS: {
      return {
        ...state,
        isError: action.value,
      };
    }
    case USER_LIST_SUCCESS: {
      return {
				...state,
				users: action.value
      };
    }
    default:
      return state;
  }
};

export default users;
