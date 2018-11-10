import BotInputs from "./BotInputs";

export default class BotUser {
  constructor(name, presence, avatar, botSubmit) {
    this.name = name;
    this.presence = presence;
    this.avatar = avatar;
    this.botSubmit = botSubmit;

    this.sendMsg();

    setInterval(this.changePresence, 10000);
  }

  getRandomIntervalTime = () => {
    let min = 5000;
    let max = 25000;
    return Math.random() * (max - min) + min;
  };

  // Get random number for presence switcher
  getRandomInt = number => {
    return Math.floor(Math.random() * Math.floor(number));
  };

  sendMsg = () => {
    let botInputs = new BotInputs();

    if (this.presence === "online") {
      setTimeout(() => {
        this.botSubmit(this.name, botInputs.getInputs());
        this.sendMsg();
      }, this.getRandomIntervalTime());
    }
  };

  goOnline = () => {
    this.presence = "online";
    this.botSubmit(this.name, this.name + " has come online");
    this.sendMsg();
  };

  playGame = () => {
    this.presence = "playing";
  };

  awayFromKeyboard = () => {
    this.presence = "away";
  };

  goOffline = () => {
    this.presence = "offline";
    this.botSubmit(this.name, this.name + " has gone offline");
  };

  changePresence = () => {
    let random;
    if (this.presence === "online") {
      random = this.getRandomInt(12);
      if (random === 1) {
        this.playGame();
      } else if (random === 2) {
        this.awayFromKeyboard();
      } else if (random === 3) {
        this.goOffline();
      }
    } else if (this.presence === "away") {
      random = this.getRandomInt(10);
      if (random <= 3) {
        this.goOnline();
      } else if (random === 4) {
        this.playGame();
      } else if (random === 5) {
        this.goOffline();
      }
    } else if (this.presence === "playing") {
      random = this.getRandomInt(10);
      if (random <= 3) {
        this.goOnline();
      } else if (random === 4) {
        this.awayFromKeyboard();
      } else if (random === 5) {
        this.goOffline();
      }
    } else if (this.presence === "offline") {
      random = this.getRandomInt(10);

      return random <= 4 ? this.goOnline() : false
    }
  };
}
