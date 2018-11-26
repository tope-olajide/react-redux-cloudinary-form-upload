import { ADD_USER,FETCH_USER,DELETE_USER } from '../actions/type';
import axios from 'axios';

const apiUrl = 'http://127.0.0.1:5000/api/user';
export const createUser = ({ fullname, username, email, imageUrl, imageId }) => {
    return (dispatch) => {
      return axios.post(`${apiUrl}/create-user`, {fullname, username, email, imageUrl, imageId})
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
        editing: false
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
      return axios.get(`${apiUrl}/all-users`)
        .then(response => {
          dispatch(fetchUsers(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  export const deleteUser = id => {
    return (dispatch) => {
      return axios.get(`${apiUrl}/delete-user/${id}`)
        .then(response => {
          dispatch(deleteUserSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  export const deleteUserSuccess = id => {
    return {
      type: DELETE_USER,
      payload: {
        id
      }
    }
  }