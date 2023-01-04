import chalk  from "chalk";
import fs from 'fs'

const path = "project/frontend/nod/index.js";
  
fs.access(path, (error) => {
    fs.mkdir(path, { recursive: true }, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("New Directory created successfully !!");
      }
    });
  
  
});
console.log(chalk.red(path))