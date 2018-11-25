import {
    User
} from '../models';

export default class Users {
    createProfile(req, res) {
        const {
            fullname,
            username,
            email,
            description,imageUrl,
            imageId
        } = req.body;
        if (!(fullname || username || email || description)) { 
            return res.status(401).json({
                success: true,
                message: 'please enter all the fields'
            })
        }
        User
            .create({
                fullname,
                username,
                email,
                description,
                imageUrl,
                imageId
            }).then((newUser) => {
                return res.status(201).json({
                    success: true,
                    message: 'New user created successfull!',
                    newUser
                });
            })
            .catch(error => res.status(500).json({
                success: false,
                message: `Error creating user ${error.message}`
            }));
    }

}