import express from 'express';
import User from '../../controller/user';

const user = express.Router();

const newUser = new User();

user.post('/create-profile', newUser.createProfile);
export default user;