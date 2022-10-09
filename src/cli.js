#!/usr/bin/env node
'use strict';
const { exec } = require('child_process');

const args = process.argv.splice(2).join(' ');
const pathToTemplates = process.mainModule.filename
  .replace('cli.js', 'templates')
  .replace('.bin/nock-swagger', 'nock-swagger/templates');
const isYarn = process.env.npm_execpath.includes('yarn');
const cliExecutor = isYarn ? 'yarn' : 'npx';

const toExecute = `${cliExecutor} nswag openapi2tsclient /templateDirectory:${pathToTemplates} /template:Axios /serviceHost:.  ${args}`;
exec(toExecute, function (e, stdout, stderr) {
  console.log(stdout);
});
