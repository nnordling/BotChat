import React, { Component } from "react";
import { observer } from "mobx-react";

import ChatMessage from "./ChatMessage";

class MessageList extends Component {
  shouldScrollDown = true;

  scrollToNewMessage = () => {
    let element = document.getElementById("chatWindow");
    element.scrollTop = element.scrollHeight;
    console.log("element scroll", (element.scrollTop = element.scrollHeight));
  };

  shouldAutoScrollDown = () => {
    let element = document.getElementById("chatWindow");
    const diff =
      element.scrollTop - (element.scrollHeight - element.clientHeight);
    console.log("diff", diff < 10 && diff > -10);
    console.log(
      "diff",
      element.scrollTop - (element.scrollHeight - element.clientHeight)
    );

    this.shouldScrollDown = diff < 10 && diff > -10;
  };

  componentDidUpdate() {
    if (this.shouldScrollDown) {
      this.scrollToNewMessage();
    }
    console.log("shouldScrollDown", this.shouldScrollDown);
  }

  componentDidMount() {
    let element = document.getElementById("chatWindow");
    element.addEventListener("mousewheel", this.shouldAutoScrollDown);
  }

  render() {
    let messages = this.props.messages.map(msg => {
      return (
        <ChatMessage
          key={msg.msgKey}
          user={msg.user}
          time={msg.time}
          input={msg.input}
          id={msg.msgKey}
        />
      );
    });
    return <div id="chatWindow">{messages}</div>;
  }
}

export default observer(MessageList);
