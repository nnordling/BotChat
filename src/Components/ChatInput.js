import React, { Component } from "react";

export default class ChatInput extends Component {
  handleInput = e => {
    this.props.handleInput("Admin", this.refs.message.value);
    this.refs.message.value = "";
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleInput}>
        <div className="input-group mb-3 form chatInput">
          <input
            type="text"
            className="form-control"
            placeholder="Message.."
            aria-label="Message"
            aria-describedby="basic-addon2"
            ref={"message"}
            required={true}
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
