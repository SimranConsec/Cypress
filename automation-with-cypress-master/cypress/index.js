var express = require('express');
var app = express();
var PORT = 3000;

// Without middleware
app.get('/', function (req, res) {
  res.end();
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});

require("cypress-xpath");
require('cypress-plugin-tab');

//For download file test
// const { isFileExist } = require('cy-verify-downloads');
// module.exports = (on, config) => {
//   on('task', { isFileExist })
// }

//To execute test cases on the multiple environments
const fs = require("fs-extra");
const path = require("path");
const fetchConfigurationByFile = file => {
  const pathOfConfigurationFile = `config/cypress.${file}.json`;
  return (file && fs.readJson(path.join(__dirname, "../", pathOfConfigurationFile))
  );
};
module.exports = (on, config) => {
  const environment = config.env.configFile || "qa";
  const configurationForEnvironment = fetchConfigurationByFile(environment);
  return configurationForEnvironment || config;
};