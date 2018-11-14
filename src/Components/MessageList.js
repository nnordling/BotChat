import React, { Component } from "react";
import { observer } from "mobx-react";

import ChatMessage from "./ChatMessage";

class MessageList extends Component {
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
