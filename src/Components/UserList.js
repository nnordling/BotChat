import React, { Component } from "react";
import avatar from '../images/avatar.png'

export default class UserList extends Component {
  render() {
    let users = this.props.users.map((user, i) => {
      return <div className="user" key={i}>
        <div className="userAvatar">
          <img src={avatar} alt="avatar" height={32} width={32}/>
        </div>
        <div className="userInfo">
          <p className="userName">{user.name}</p>
          <p className={user.presence}>{user.presence}</p>
        </div>
        <hr/>
        </div>;
    });

    return (
      <div className={"userList"}>
        <div className={"userListTitle"}>Users</div>
        <div>
          {users}
        </div>
      </div>
    );
  }
}
