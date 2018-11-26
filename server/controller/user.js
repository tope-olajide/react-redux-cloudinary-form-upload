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
    modifyUser({ body, params }, res) {
        const { id } = params;
        const {
            fullname,
            username,
            email,
            description,imageUrl,
            imageId
        } = body;
        if (!(fullname || username || email || description)) { 
            return res.status(401).json({
                success: true,
                message: 'please enter all the fields'
            })
        }
        const updateDatabase = ({
            fullname,
            username,
            email,
            description,
            imageUrl,
            imageId
        }) => {
          User.findOne({
            where: { id: id },
          })
            .then((foundUser) => {
              if (!foundUser) {
                return res.status(404).json({
                  success: false,
                  message: 'User not found'
                });
              }
    
              if (imageId !== foundUser.imageId) {
                cloudinary.destroy(foundUser.imageId, () => { });
              }
    
              foundUser.updateAttributes({
                fullname,
                username,
                email,
                description,
                imageUrl: imageUrl || foundUser.imageUrl,
                imageId: imageId || foundUser.imageId
              })
                .then((user) => {
                   res.status(200).json({
                    success: true,
                    message: 'User record updated',
                    user: user
                  });
                });
            })
            .catch((error) => res.status(500).json({
              success: false,
              message: 'An error occured' + error
            }));
        };
        updateDatabase({
            name,
            username,
            res,
            userId,
            imageUrl,
            imageId
          });   
}
getUser({ params }, res) {
    const { userId } = params;
    User.findOne({
        where: { id: userId }
      }) .then(user => res.status(200).json({
        success: true,
        message: 'User found',
        user
      })).catch((error) => res.status(500).json({
        success: false,
        message: 'Error fetching user',
        error
      }));
}
deleteUser({ params }, res) {
    const { id } = params;
    User.findOne({
        where: {
          id: id
        }
      })  .then((foundUser) => {
        foundUser.destroy()
          .then(() => {
            cloudinary.destroy(foundUser.imageId);

            res.status(200).json({
              success: true,
              message: 'User Deleted!'
            });
          });
      })
      .catch(() => {
        res.status(400).json({
          success: false,
          message: 'Error deleting User'
        });
      });
}
allUser  (res) {   
    User.findAll
      .then((allUsers) => {
        res.status(200).json({
            success: true,
            message: 'User Deleted!',
            allUsers
          }) })
          .catch((error) => {
            res.status(400).json({
              success: false,
              message: 'Error fetching all users User',
              error
            });
          });
}
}