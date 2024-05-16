#! /usr/bin/env node
import chalk from "chalk";
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
differenceInSeconds;

console.log("\t", "-".repeat(70), "\t");
console.log(
  chalk.bold.magenta("\t\tWelcome To My Project - 'COUNTDOWN TIMER'\t\t")
);
console.log("\t", "-".repeat(70), "\t");

//Get User Input
const res = await inquirer.prompt({
  name: "userInput",
  type: "number",
  message: "Please enter the amount of second:",
});
const input = res.userInput;

function startTime(val: number) {
  const intTime = new Date().setSeconds(new Date().getSeconds() + val);
  const intervalTime = new Date(intTime);
  setInterval(() => {
    const currentTime = new Date();
    const timeDiff = differenceInSeconds(intervalTime, currentTime);
    if (timeDiff <= 0) {
      console.log(`${chalk.bold.red.italic("Timer has expired!!!!")}`);
      process.exit();
    }
    const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
    const sec = Math.floor(timeDiff % 60);
    console.log(
      `${chalk.bold.blue(min.toString().padStart(2, "0"))}:${chalk.bold.blue(
        sec.toString().padStart(2, "0")
      )}`
    );
  }, 1000);
}
startTime(input);
