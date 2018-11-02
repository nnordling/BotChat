import React, { Component } from "react";

export default class ChatInput extends Component {
  handleInput(e) {
    if (this.refs.message.value === "") {
      alert("Invalid input");
    } else {
      this.props.handleInput("Admin", this.refs.message.value);
      this.refs.message.value = "";
    }
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleInput.bind(this)}>
        <div className="input-group mb-3 form chatInput">
          <input
            type="text"
            className="form-control"
            placeholder="Message.."
            aria-label="Message"
            aria-describedby="basic-addon2"
            ref={"message"}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">
              Send
            </button>
          </div>
        </div>
      </form>
    );
  }
}
