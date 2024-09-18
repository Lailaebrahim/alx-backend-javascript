const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const helloStr = 'Welcome to Holberton School, what is your name?\n'

rl.question(helloStr, (name) => {
    console.log(`Your name is: ${name}`);
    //check if stdin is an interactive terminal 
    if (process.stdin.isTTY) {
    console.log('This important software is now closing');
    }
    rl.close();
});

rl.on('close', () => {
    process.exit();
});
