"use strict";

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tasks = ["本を買う", "progateをする", "買い物をする"];
tasks.forEach(function (task) {
  console.log(task);
});
console.log('--------------');

var task = _readlineSync.default.question('新しいTodoを入力してください: ');

tasks.push(task);
console.log('--------------');
tasks.forEach(function (task) {
  console.log(task);
});