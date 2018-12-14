import {
  ADD_USER,
  FETCH_ALL_USER,
  DELETE_USER,FETCH_USER,EDIT_USER
} from './../actions/type';
const initialState = {
  user : {},
  usersDetails : {},
  editUser : {}
}
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return { ...state,
        user: action.payload
      };
    case FETCH_USER:
      return {...state, usersDetails: action.payload.user}
      case EDIT_USER:
      return {...state, editUser: action.payload.user}
    case DELETE_USER:
      return state.filter(user => user._id !== action.payload.id);
    case FETCH_ALL_USER:
      return action.users;
    default:
      return state;
  }
}