export default class BotInputs {
  getInputs() {
    let inputs = [
      "I like trains",
      "Let's play!",
      "Frankly, my dear I don't give a damn",
      "Here's looking at you, kid",
      "I'm going to make him an offer he can't refuse",
      "Toto, I've got a feeling we're not in Kansas anymore",
      "Go ahead, make my day",
      "May the force be with you",
      "You talkin' to me?",
      "I love the smell of napalm in the morning",
      "The stuff that dreams are made of",
      "Made it, Ma! Top of the world!",
      "I'm as mad as hell, and I'm not going to take this anymore!",
      "Louis, I think this is the beginning of a beautiful friendship",
      "There's no place like home",
      "I am big! It's the pictures that got small",
      "Show me the money!",
      "You're gonna need a bigger bot",
      "Today, I consider myself the luckiest bot on the face of the Earth",
      "If you build it, he will come",
      "Mama always said life was like a box of chocolates. You never know what you're gonna get",
      "We'll always have Paris",
      "I see dead bots",
      "It's alive! It's alive!",
      "Houston, we have a problem",
      "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
      "One morning I shot an elephant in my pajamas. How he got in my pajamas, I don't know",
      "There's no crying in baseball!",
      "A bot's best friend is his creator",
      "Well, here's another nice mess you've gotten me into!",
      "Say 'hello' to my little friend!",
      "Of all the chat joints in all the towns in all the world, she walks into mine",
      "Forget it, Jake, it's Bottown.",
      "Hasta la vista, baby",
      "Listen to me, mister. You're my knight in shining armor. Don't you forget it. You're going to get back on that horse, and I'm going to be right behind you, holding on tight, and away we're gonna go, go, go!",
      "I feel the need—the need for speed!",
      "Carpe diem. Seize the day, boys. Make your lives extraordinary",
      "I'm the King of the World!",
      "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bot, which is what I am."
    ];

    return inputs[Math.floor(Math.random() * inputs.length)];
  }
}
