import React, { Component } from "react";

import avatar from "../images/avatar.png";

export default class UserList extends Component {
  handleUser = () => {
    this.props.handleUser("Botson", "online");
  };

  render() {
    let users = this.props.users.map((user, i) => {
      return (
        <div className="user" key={i}>
          <div className="userAvatar">
            <img src={avatar} alt="avatar" height={32} width={32} />
          </div>
          <div className="userInfo">
            <p className="userName">{user.name}</p>
            <p className={user.presence}>{user.presence}</p>
          </div>
          <hr className={"usersDivider"} />
        </div>
      );
    });

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

        <div className={"userListField"}>{users}</div>
      </div>
    );
  }
}
