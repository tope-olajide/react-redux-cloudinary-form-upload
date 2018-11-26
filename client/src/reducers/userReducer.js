import {
  ADD_USER,
  FETCH_USER,
  DELETE_USER
} from './../actions/type';

export default function postReducer(state = [{
  id: 1,
  username: 'ttttttt',
  fullname: 'uuuuuuuuu uuuuu',
  email: 'oioioioioioi',
  username: 'ioiiiiioi',
  imageUrl: 'featured1.jpg'
}], action) {
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