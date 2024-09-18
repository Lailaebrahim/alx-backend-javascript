const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

rl.question('', (name) => {
  console.log(`Your name is: ${name}`);
  
  // Check if we're reading from a TTY (interactive terminal)
  if (process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
  
  rl.close();
});
