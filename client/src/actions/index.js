import { ADD_USER,FETCH_USER } from '../actions/type';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/user';
export const createUser = ({ fullname, username, email, imageUrl, imageId }) => {
    return (dispatch) => {
      return axios.post(`${apiUrl}/create-profile`, {fullname, username, email, imageUrl, imageId})
        .then(response => {
          dispatch(createUserSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  
  export const createUserSuccess =  (data) => {
    return {
      type: ADD_USER,
      payload: {
        _id: data._id,
        fullname: data.fullname,
        username: data.username,
        email: data.email,
        imageUrl: data.imageUrl,
        imageId: data.imageId,
      }
    }
  };
  export const fetchUsers = (users) => {
    return {
      type: FETCH_USER,
      users
    }
  };
  
  export const fetchAllUsers = () => {
    return (dispatch) => {
      return axios.get(apiUrl)
        .then(response => {
          dispatch(fetchUsers(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };