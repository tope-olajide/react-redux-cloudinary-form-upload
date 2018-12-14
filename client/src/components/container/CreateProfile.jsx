import React, { Component } from "react";
import CreateProfilePage from "../presentation/CreateProfilePage";
import axios from "axios";
import { connect } from "react-redux";
import { createUser } from "./../../actions";
import ViewAllProfile from "../presentation/ViewAllProfilePage";
class CreateProfile extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      username: "",
      email: "",
      files: [],
      profile: [],
      imageUrl: "",
      imageId: ""
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
    const uploaders = this.state.profile.map( file => {
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
      const file = files[i];
      URL.revokeObjectURL(file.preview);
    }
  }
  render() {
    return (
      <div>
        <CreateProfilePage
          files={this.state}
          onDrop={this.onDrop}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
2
}
const mapDispatchToProps = dispatch => {
  return {
    onAddUser: user => {
      dispatch(createUser(user));
    }
  };
};

export default CreateProfile