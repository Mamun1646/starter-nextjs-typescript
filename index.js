#!/usr/bin/env node
const execSync = require("child_process").execSync;
//const path = require("path")

execSync("git clone https://github.com/Mamun1646/nextjs-template.git");

//console.log(path.join(__dirname, `/nextjs-template`), `/nextjs-template`)
console.log("npm i starting ")
execSync("npm i", {cwd: `/nextjs-template` });
console.log("\n\n\n==========Hello, Your done here!===========");
