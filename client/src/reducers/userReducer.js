import { ADD_USER } from './../actions/type';

export default function postReducer(state = [], action) {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
}