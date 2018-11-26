import express from 'express';
import User from '../../controller/user';

const user = express.Router();

const newUser = new User();

user.post('/create-user', newUser.createProfile);
user.put('/modify-user/:id', newUser.modifyUser);
user.get('/get-user/:id', newUser.getUser);
user.delete('/delete-user/:id', newUser.deleteUser);
user.get('/all-users', newUser.allUsers);
export default user;