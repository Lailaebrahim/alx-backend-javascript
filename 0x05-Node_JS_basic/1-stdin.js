process.stdout.write('Welcome to Holberton School, what is your name?\n');

/** The readable event handler manually reads chunks of data using
 * process.stdin.read() and writes them to the output
 *  using process.stdout.write(). */
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
