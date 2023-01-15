#!/usr/bin/env node
const execSync = require("child_process").execSync;

execSync("git clone https://github.com/Mamun1646/nextjs-template.git");
execSync("cd nextjs-template; npm i;");
console.log("\n\n\n==========Hello, Your done here!===========");
