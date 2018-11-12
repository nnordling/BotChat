import React, { Component } from "react";

export default class AddUser extends Component {
  handleUser = e => {
    let username = this.refs.username.value;
    let presence = this.refs.presence.value;
    this.props.handleUser(username, presence);
    this.refs.presence.value = "online";
    this.refs.username.value = "";
    e.preventDefault();
  };

  render() {
    return (
      <div className="addUserField">
        <form onSubmit={this.handleUser} className="form">
          <div className="row">
            <div className="col mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Username.."
                aria-label="Username"
                aria-describedby="basic-addon2"
                ref={"username"}
                required={true}
              />
            </div>
          </div>
          <div className="row">
            <div className="col mb-2">
              <select
                ref={"presence"}
                className="form-control"
                id="inputGroupSelect01"
                required={true}
              >
                <option value="online">Online</option>
                <option value="playing">Playing</option>
                <option value="away">Away</option>
                <option value="offline">Offline</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col mb-2">
              <button className="btn btn-outline-success" type="submit">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
