import React, { Component } from "react";
import ChatInput from "./Components/ChatInput";
import MessageList from "./Components/MessageList"
import Users from "./Components/Users";
import BotUser from "./Bots/BotUser";

import { observer } from "mobx-react";
import { observable, action } from "mobx";

import "./App.css";

let messageKey = 0;

class App extends Component {
  messages = observable.array();
  users = observable.array();

  handleSubmit = action((user, input, time, msgKey) => {
    time = this.getCurrentTime();
    msgKey = messageKey++;
    let messages = this.messages;

    if (messages.length >= 100) {
      messages.shift();
    }

    messages.push({ user, input, time, msgKey });
  });

  handleNewUser = action((name, presence) => {
    let user = new BotUser(name, presence, "avatar", this.handleSubmit);
    let users = this.users;
    users.push(user);
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

  render() {
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
              <MessageList messages={this.messages}/>
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
