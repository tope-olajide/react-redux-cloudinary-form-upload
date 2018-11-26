import React, { Component } from "react";
import ViewAllProfilePage from "./../presentation/ViewAllProfilePage";
class ViewAllProfile extends Component {
  render() {
    return (
      <div>
        <h1>All Posts</h1>
        {this.props.users.map(user => (
          <div key={user.id}>
            <ViewAllProfilePage
              username={username}
              fullname={fullname}
              email={email}
              imageUrl={imageUrl}
            />
            }
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state
  };
};
export default ViewAllProfile;