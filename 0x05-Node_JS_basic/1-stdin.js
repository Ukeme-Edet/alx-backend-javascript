const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("close", () => {
    console.log("This important software is now closing");
    process.exit(0);
});
rl.question("Welcome to Holberton School, what is your name?\n", (name) => {
    console.log(`Your name is: ${name}`);
});
