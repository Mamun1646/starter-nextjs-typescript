#!/usr/bin/env node
const execSync = require("child_process").execSync;

execSync("mkdir test")
execSync("git clone https://github.com/Mamun1646/nextjs-template.git", {cwd: "./test"});
execSync("cd ./test/nextjs-template; npm i;");
console.log("\n\n\n==========Hello, Your done here!===========");
