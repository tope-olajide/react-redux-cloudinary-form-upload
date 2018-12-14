import React, { Component } from "react";
import "./ProfilePage.css";
import { Button } from "mdbreact";
class ViewProfile extends Component {

  render() {
    return (
      <div class=" card profile-section mt-5 p-4 col-md-4">
        <img src="avatar.jpg" class="mx-auto d-block" />
        <div class=" profile-text">
          <h5>{this.props.fullname}</h5>
        </div>
        <p class="text-center">{this.props.username}</p>
        <p class="text-center">{this.props.email}</p>
        <p class="user-info">{this.props.description}</p>
        <Button color="secondary" onClick={this.props.editProfile}>
          Edit profile
        </Button>
        <Button color="secondary" onClick={() => this.toggle(6)}>
          Delete profile
        </Button>
      </div>
    );
  }
}
export default ViewProfile;
