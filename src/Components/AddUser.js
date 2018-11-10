import React, { Component } from "react";

export default class AddUser extends Component {
  handleUser = (e) => {
    let username = this.refs.username.value;
    let presence = this.refs.presence.value;
    this.props.handleUser(username, presence);
    this.refs.username.value = "";
    e.preventDefault();
  };

  render() {
    return (
      <div className="addUserField">
        <form onSubmit={this.handleUser}>
          <div className="input-group mb-3 form">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username.."
                  aria-label="Username"
                  aria-describedby="basic-addon2"
                  ref={"username"}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <select ref={"presence"} className="custom-select" id="inputGroupSelect01">
                  <option defaultValue={"Presence.."}>Presence..</option>
                  <option value="online">Online</option>
                  <option value="playing">Playing</option>
                  <option value="away">Away</option>
                  <option value="offline">Offline</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                  <button className="btn btn-outline-secondary" type="submit">
                    Add
                  </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}