import React, { Component } from "react";
import "./CreateProfileForm.css";
import { Input, Button } from "mdbreact";
import Dropzone from "react-dropzone";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  margin: 'auto',
  marginTop: 16,
  width: '50%'
};

const thumb = {
  display: "inline-flex",
  borderRadius: 7,
  width: 195,
  height: 195,
  padding: 0,
  position: "absolute",
  top: 0
};

const thumbInner = {
  display: "column",
  minWidth: 195,
  overflow: "hidden"
};

const img = {
  display: "block",
  width: "100%",
  height: "100%"
};
class CreateProfilePage extends Component {
  render() {
    const { files } = this.props.files;

    const thumbs = files.map(file => (
      <div style={thumb}>
        <div style={thumbInner}>
          <img src={file.preview} style={img} />
        </div>
      </div>
    ));
    return (
      <div className="biz-form-container card p-5">
        <h4 className="dark-text biz-form-title  text-center ">Add user</h4>
        <form>
          <Input
            label="Full Name"
            icon=""
            onChange={event => {
              this.props.handleInputChange("fullname", event.target.value);
            }}
          />
          <Input
            label="Username"
            icon=""
            onChange={event => {
              this.props.handleInputChange("username", event.target.value);
            }}
          />
          <Input
            label="Email"
            icon=""
            onChange={event => {
              this.props.handleInputChange("email", event.target.value);
            }}
          />
          <Input
            type="textarea"
            label="Description"
            icon=""
            onChange={event => {
              this.props.handleInputChange("description", event.target.value);
            }}
          />
          <section>
            <div className="dropzone">
              <Dropzone accept="image/*" onDrop={this.props.onDrop}>
                {" "}
                {/* this.props.onDrop (files) */}
                <h4>
                  Try dropping your picture here, or click to select the picture
                  you want to upload.
                </h4>
                <aside style={thumbsContainer}>{thumbs}</aside>
              </Dropzone>
            </div>
            <div className="text-center">
              <Button onClick={this.props.handleFormSubmit} color="primary">
                Login
              </Button>
            </div>
          </section>
        </form>
      </div>
    );
  }
}

export default CreateProfilePage;
