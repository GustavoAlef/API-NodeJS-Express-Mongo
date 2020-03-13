const fs = require("fs");
const path = require("path");

module.exports = app => {
  //importa todos os index.js de uma vez só
  fs.readdirSync(__dirname)
    .filter(file => file.indexOf(".") !== 0 && file !== "index.js")
    .forEach(file => require(path.resolve(__dirname, file))(app));
};