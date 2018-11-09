import React, { Component } from "react";

export default class ChatMessage extends Component {
  /*shouldComponentUpdate(nextProps) {
    let userChanged = nextProps.user !== this.props.user;
    let inputChanged = nextProps.input !== this.props.input;
    let timeChanged = nextProps.time !== this.props.time;

    return userChanged || timeChanged || inputChanged;
  }*/

  render() {
    return (
      <div className={"chatMessageCard"}>
        <p className={"fromUser"}>
          {this.props.user} - {this.props.time}
        </p>
        <h5 className={"message"}>{this.props.input}</h5>
      </div>
    );
  }
}
