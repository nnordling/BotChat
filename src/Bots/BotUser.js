import { observable, action, reaction } from "mobx";

import BotInputs from "./BotInputs";

class BotUser {
  _presence = observable.box();

  constructor(name, presence, avatar, botSubmit) {
    this.name = name;
    this._presence.set(presence);
    this.avatar = avatar;
    this.botSubmit = botSubmit;

    this.sendMsg();
    this.changePresence();

    reaction(
      () => this.presence,
      presence => {
        if (presence === "online") {
          this.botSubmit(this.name, this.name + " has come online");
        } else if (presence === "offline") {
          this.botSubmit(this.name, this.name + " has gone offline");
        }
      }
    );
  }

  getRandomMessageTime = () => {
    let min = 5000;
    let max = 25000;
    return Math.random() * (max - min) + min;
  };

  getRandomPresenceTime = () => {
    let min = 30000;
    let max = 120000;
    return Math.random() * (max - min) + min;
  };

  sendMsg = () => {
    let botInputs = new BotInputs();

    setTimeout(() => {
      if (this.presence === "online") {
        this.botSubmit(this.name, botInputs.getInputs());
      }
      this.sendMsg();
    }, this.getRandomMessageTime());
  };

  get presence() {
    return this._presence.get();
  }

  set presence(presence) {
    this._presence.set(presence);
  }

  changePresence = () => {
    setTimeout(
      action(() => {
        let presences = ["online", "playing", "offline", "away"];
        let newPresence = presences.filter(
          oldPres => oldPres !== this.presence
        );
        let randomPresence =
          newPresence[Math.floor(Math.random() * newPresence.length)];
        this.presence = randomPresence;
        this.changePresence();
      }),
      this.getRandomPresenceTime()
    );
  };
}

export default BotUser;
