import express from 'express';
import User from '../../controller/user';

const user = express.Router();

const newUser = new User();

user.post('/create-user', newUser.createProfile);
user.post('/modify-user', newUser.modifyUser);
user.post('/get-user', newUser.getUser);
user.post('/delete-user', newUser.deleteUser);
user.post('/all-users', newUser.allUsers);
export default user;