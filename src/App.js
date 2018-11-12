import React, { Component } from "react";
import ChatInput from "./Components/ChatInput";
import ChatMessage from "./Components/ChatMessage";
import Users from "./Components/Users";
import BotUser from "./Bots/BotUser";

import { observer } from "mobx-react";
import { observable, action } from "mobx";

import "./App.css";

let messageKey = 0;

class App extends Component {
  messages = observable.array();
  users = observable.array();
  shouldScrollDown = true;

  scrollToNewMessage = () => {
    let element = document.getElementById("chatWindow");
    element.scrollTop = element.scrollHeight;
  };

  shouldAutoScrollDown = () => {
    let element = document.getElementById("chatWindow");
    const diff =
      element.scrollTop - (element.scrollHeight - element.clientHeight);

    return diff < 10 && diff > -10;
  };

  handleSubmit = action((user, input, time, msgKey) => {
    time = this.getCurrentTime();
    msgKey = messageKey++;
    let messages = this.messages;

    if (messages.length >= 100) {
      messages.shift();
    }

    this.shouldScrollDown = this.shouldAutoScrollDown();

    messages.push({ user, input, time, msgKey });
  });

  handleNewUser = action((name, presence) => {
    let user = new BotUser(name, presence, "avatar", this.handleSubmit);
    let users = this.users;
    users.push(user);
    console.log(this.users)
  });

  getCurrentTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    return hour + ":" + min + ":" + sec;
  };

  componentDidUpdate() {
    if (this.shouldScrollDown) {
      this.scrollToNewMessage();
      this.shouldScrollDown = false;
    }
  }

  render() {


    let messages = this.messages.map(msg => {
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

    return (
      <div className="App">
        <div className="container">
          <div className="row chatApp">
            <div className="col-3 pl-0 pr-0">
              <div className="users">
                <Users users={this.users} handleUser={this.handleNewUser} />
              </div>
            </div>
            <div className="col-9 pl-0 pr-0">
              <div id="chatWindow">{messages}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <ChatInput handleInput={this.handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(App);
