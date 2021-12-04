var postcss = require("postcss");
var csso = require("postcss-csso");

module.exports = {
  plugins: [csso()],
};
