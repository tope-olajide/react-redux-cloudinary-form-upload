import { ADD_USER,FETCH_ALL_USER,DELETE_USER,FETCH_USER,EDIT_USER } from '../actions/type';
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
        
      }
    }
  };
  export const fetchUsers = (users) => {
    // console.log(users)
    return {
      type: FETCH_ALL_USER,
      users
    }
    
  };
  
  export const fetchAllUsers = () => {
    return (dispatch) => {
      return axios.get(`${apiUrl}/all-users`)
        .then(response => {
          //console.log(response.data)
          dispatch(fetchUsers(response.data.allUsers))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  export const fetchSingleUser = id => {
    return (dispatch) => {
      return axios.get(`${apiUrl}/get-user/${id}`)
      .then(response => {
        // console.log(response.data.user)
        dispatch(fetchUser(response.data.user))
      })
      .catch(error => {
        throw(error);
      });
    }
  }
  export const fetchUser = user => {
    console.log(user)
    return {
      type: FETCH_USER,
      payload: {
        user
      }
    }
  }
  export const editSingleUser = id => {
    return (dispatch) => {
      return axios.get(`${apiUrl}/get-user/${id}`)
      .then(response => {
        // console.log(response.data.user)
        dispatch(editUser(response.data.user))
      })
      .catch(error => {
        throw(error);
      });
    }
  }
  export const editUser = user => {
    console.log(user)
    return {
      type: EDIT_USER,
      payload: {
        user
      }
    }
  }
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