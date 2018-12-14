import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { createUser } from "./../../actions";
import EditProfilePage from "./../presentation/EditProfilePage"
import {editSingleUser} from './../../actions/index'
class EditProfile extends Component {
  componentDidMount() {

    const { id } = this.props.match.params;
    this.props.dispatch(editSingleUser(id));
    console.log(id)
  }
  constructor() {
 
    super();
    this.state = {
      fullname: "",
      username: "",
      email: "",
      files: [],
      profile: [],
      imageUrl: "",
      imageId: "",
      userId:"",
      userInfo:[]
    };
    this.onDrop = this.onDrop.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
   
  }
  onDrop(files) {
    this.setState({
      profile: files,
      files: files.map(file => ({
        ...file,
        preview: URL.createObjectURL(file)
      }))
    });
  }
  handleInputChange(key, value) {
    this.setState({ [key]: value });
  }
  handleFormReset = () => {
    this.setState({
      fullname: "",
      username: "",
      email: ""
    });
  };
  handleFormSubmit = files => {
    alert("Loading....");
    // start loading animation
    // Push all the axios request promise into a single array
    const uploaders = this.state.profile.map(file => {
      console.log(file);
      // Initial FormData
      const formData = new FormData();

      formData.append("upload_preset", "sijxpjkn");
      formData.append("api_key", "139423638121511");
      formData.append("file", file);
      formData.append("timestamp", (Date.now() / 1000) | 0);

      // Make an AJAX upload request using Axios
      return axios
        .post(
          "https://api.cloudinary.com/v1_1/temitope/image/upload",
          formData,
          {
            headers: { "X-Requested-With": "XMLHttpRequest" }
          }
        )
        .then(response => {
          const data = response.data;
          this.setState({
            imageUrl: data.secure_url,
            imageId: data.public_id
          });
          console.log(data);
        })
        .catch(function(err) {
          alert("error " + err);
        });
    });

    // Once all the files are uploaded
    axios
      .all(uploaders)
      .then(data => {
        alert(
          "Success!!!: Upload picture successfully, now saving to database"
        );
        this.props.onAddUser(this.state);
        alert("saved to database successfully");
        this.handleReset();
      })
      .catch(function(err) {
        alert(err);
      });
  };

  componentWillUnmount() {
    //  revoke the data uris to avoid memory leaks
    const { files } = this.state;
    for (let i = files.length; i >= 0; i--) {
      const file = files[0];
      URL.revokeObjectURL(file.preview);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.usersDetails !== nextProps.usersDetails) {
      this.setState({userInfo:nextProps.usersDetails})
      
    }
  }
  render() {

    return (
      <div>{console.log(this.state.userInfo)}
        <EditProfilePage 
          files={this.state}
          onDrop={this.onDrop}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          defaultFullname = {this.props.usersDetails.key} 

         
        /></div>
        
    )
  }
}
const mapStateToProps = state => {
  console.log(state.users.editUser)
  return {
    usersDetails: state.users.editUser
  };
};

export default connect(mapStateToProps)(EditProfile);
          /*   
         defaultFullname = {this.props.usersDetails.fullname} 
          defaultEmail = {this.props.usersDetails.email} 
          defaultDescriptions = {this.props.usersDetails.description}
          defaultUsername = { this.state.userInfo} */