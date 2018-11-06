import React, { Component } from "react";
import ChatInput from "./Components/ChatInput";
import ChatMessage from "./Components/ChatMessage";
import UserList from "./Components/UserList";
import AddUser from "./Components/AddUser"
import BotUser from "./Bots/BotUser";

import "./App.css";

let messageKey = 0;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      showModal: false,
      users: [
        new BotUser("Rhett Botler", "online", "avatar", this.handleSubmit),
        new BotUser("Bot Blaine", "online", "avatar", this.handleSubmit),
        new BotUser("Travis Botle", "away", "avatar", this.handleSubmit),
        new BotUser(
          "Lt. Col. Bot Kilgore",
          "playing",
          "avatar",
          this.handleSubmit
        ),
        new BotUser(
          "Dr. Hannibot Lecter",
          "offline",
          "avatar",
          this.handleSubmit
        )
      ]
    };
  }

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

  handleSubmit = (user, input, time, msgKey) => {
    time = this.getCurrentTime();
    msgKey = messageKey++;
    let messages = this.state.messages;

    if (messages.length >= 100) {
      messages.shift();
    }

    const shouldScrollDown = this.shouldAutoScrollDown();

    messages.push({ user, input, time, msgKey });
    this.setState({ messages: messages }, () => {
      if (shouldScrollDown) {
        this.scrollToNewMessage();
      }
    });
  };

  handleNewUser = (name, presence, avatar) => {
    let user = new BotUser(name, presence, avatar, this.handleSubmit);
    let users = this.state.users;
    users.push(user);
    this.setState({users: users});
  };

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
    let messages = this.state.messages.map(msg => {
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
                <AddUser handleUser={this.handleNewUser}/>
                <UserList users={this.state.users} />
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

export default App;
