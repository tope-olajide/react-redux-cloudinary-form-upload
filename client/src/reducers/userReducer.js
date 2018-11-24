import { ADD_USER,FETCH_USER,DELETE_USER } from './../actions/type';

export default function postReducer(state = [], action) {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
      case DELETE_USER:
      return state.filter(post => post._id !== action.payload.id);
      case FETCH_USER:
      return action.posts;
    default:
      return state;
  }
}