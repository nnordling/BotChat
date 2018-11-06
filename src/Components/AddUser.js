import React, { Component } from "react";

export default class AddUser extends Component {
  handleUser = () => {
    this.props.handleUser("Botson", "online");
  };

  render() {
    return (
      <div className="addUserField">
        <div className="userListTitle">Users</div>
        <button className="btn btn-primary btn-sm addUserBtn" onClick={this.handleUser}>Add User</button>
      </div>
    );
  }
}