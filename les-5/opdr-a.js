const readline = require('readline-sync');

let playerName = readline.question("what is your name?")
let playerHealth = 21;
    console.log(`Hello ${playerName} its kinda nice to meet you.`);


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function battle() {
  console.log(`a slime crosses your path.`);
  console.log(`you have ${playerHealth} HP.`);

  while (playerHealth > 0) {
    
    const action = readline.question("what are you gonna do? (Fight or Run?) ");

    if (action.toLowerCase() === "fight") {
      
      const playerDamage = getRandomNumber(3, 7);
      const monsterDamage = getRandomNumber(2, 5);

      playerHealth -= monsterDamage;

      console.log(`${playerName} swings thair sword and does ${playerDamage} damage.`);
      console.log(`sime attacks and does ${monsterDamage} damage.`);

      console.log(`youve got ${playerHealth} HP.`);
    } else if (action.toLowerCase() === "run") {
      console.log(`${playerName} is a wuss.`);
      playerHealth -= 21;
      break;
    } else {
      console.log(`Non valid option. Choose 'Fight' or 'Run'.`);
    }
  }

  if (playerHealth <= 0) {
    console.log(`Youve lost. ${playerName} is beaten.`);
  } else {
    console.log(`Youve won! The monster is beaten.`);
  }
}

battle();
