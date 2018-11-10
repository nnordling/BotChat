import React, { Component } from "react";

import UserList from "./UserList"
import AddUser from "./AddUser"

export default class Users extends Component {
  render() {
    return (
      <div>
        <div className="addUserBtn">
          <nav className="navbar navbar-expand-lg navbar-light bg-light userListNavbar">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#users">
                    Users
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#addUser">
                    Add User
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#editUser">
                    Edit User
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className={"userListField"}>
          <AddUser handleUser={this.props.handleUser}/>
        </div>
      </div>
    );
  }
}
