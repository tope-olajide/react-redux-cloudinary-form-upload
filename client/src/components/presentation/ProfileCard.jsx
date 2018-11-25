import React, { Component } from "react";
import "./profileCard.css";
import { Button } from "mdbreact";
class BusinessCard extends Component {
  render() {
    return (
      <div className="container content-container">
        <div className="row card-container">
          <div className="col-md-4">
            <div className="card  mb-5 mb-5 ml-0 mr-0 shadow-sm">
              <img
                className="card-img-top"
                src= {this.props.image}
                alt="Card image cap"
              />
              <div className="card-body">
                <ul>
                  <li>
                    <span>
                      <i className="fas fa-map-marker-alt" />
                      <span className="space-text" />{" "}
                      <p>{this.props.username}</p>
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-mobile-alt"> </i>{" "}
                    <span className="space-text" />
                    <p>{this.props.fullname}</p>
                  </li>
                  <li>
                    <i className="fas fa-link" />
                    <span className="space-text" />
                    <p>{this.props.email}</p>
                  </li>
                </ul>
                <div className="card-bottom">

                  <Button onClick={this.props.handleFormSubmit} color="primary">
                    Edit
                  </Button>
                  <Button onClick={this.props.handleFormSubmit} color="primary">
                    View
                  </Button>
                  <Button onClick={this.props.handleFormSubmit} color="primary">
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BusinessCard;
