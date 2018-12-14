import React, { Component } from "react";
import { connect } from "react-redux";
import ViewAllProfilePage from "./../presentation/ViewAllProfilePage";
import EditProfile from "./../container/EditProfile"
import {fetchSingleUser} from "../../actions/index"
export class ViewAllProfile extends Component {

  handleViewProfile (userId) {
    //this.context.router.history.push(`/view-profile/${userId}`);
    window.location = `/view-profile/${userId}`;
  }
  render() {
    return (
      <div>
        <h1>All Users</h1>
        {(!this.props.users.length) ? (
          <div>No User</div>
        ) : (
          this.props.users.map(user => (
            <div key={user.id}>
              <ViewAllProfilePage
                username={user.username}
                fullname={user.fullname}
                email={user.email}
                imageUrl={user.imageUrl}
                id = {user.id}
                viewProfile = {this.handleViewProfile}
              />
              }
            </div>
          ))
        )}
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log(state.users);
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(ViewAllProfile);
