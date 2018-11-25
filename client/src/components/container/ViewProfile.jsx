import React, { Component } from "react";
import ViewProfile from "./../presentation/ViewProfile";
class ViewProfileContainer extends Component {
  render() {
    if (!posts.length) {
      return <div>No Users</div>;
    }
    return (
      <div>
        {users.map(user => {
          return (
            <ViewProfile
              key={user._id}
              fullname = {user.fullname}
              username = {user.username}
              email = {user.email}
              description = {user.description}
            />
          );
        })}
      </div>
    );
  }

  mapStateToProps = state => {
    return {
      users: state.users
    };
  };
}
