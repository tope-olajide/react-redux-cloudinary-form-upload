import React, { Component } from "react";
import ViewProfile from "./../presentation/ViewProfile";
import { connect } from "react-redux";
import {fetchSingleUser} from "../../actions/index"
class ViewProfileContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchSingleUser(id));
    this.setState({
      userId:id
    })
  }
  constructor() {
    super();
    this.state = {
      userId:''
    }
    this.handleEditProfile = this.handleEditProfile.bind(this);
  }
  handleEditProfile () {
    window.location = `/edit-profile/${this.state.userId}`;
    console.log(this.state.userId)
  }
  render() {
    if (!this.props.usersDetails) {
      return <div>User info not available</div>;
    } 
    return (
      <div>{console.log(this.props.usersDetails.id)}
      {
            <ViewProfile
              key = {this.props.usersDetails.id}
              fullname = {this.props.usersDetails.fullname}
              username = {this.props.usersDetails.username}
              email = {this.props.usersDetails.email}
              description = {this.props.usersDetails.description}
              editProfile = {this.handleEditProfile}
            />
          
        }
      </div>
    );
  }

/*   mapStateToProps = state => {
    return {
      users: state.users.usersDetails
    };
  }; */
}

const mapStateToProps = state => {
  console.log(state.users.usersDetails);
  return {
    usersDetails: state.users.usersDetails
  };
};

export default connect(mapStateToProps)(ViewProfileContainer);
