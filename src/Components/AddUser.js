import React, { Component } from "react";

export default class AddUser extends Component {
  handleUser = () => {
    this.props.handleUser("Botson", "online");
  };

  render() {
    return (
      <div className="addUserField">
        <button
          className="btn btn-outline-light btn-sm"
          onClick={this.handleUser}
        >
          Add User
        </button>
      </div>
    );
  }
}