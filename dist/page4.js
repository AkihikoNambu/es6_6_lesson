"use strict";

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tasks = [{
  title: "本を買う",
  isCompleted: false
}, {
  title: "progateをする",
  isCompleted: true
}, {
  title: "買い物をする",
  isCompleted: true
}];
tasks.forEach(function (task) {
  console.log(task);
});
console.log('--------------');

var title = _readlineSync.default.question('新しいTodoを入力してください: ');

tasks.push({
  title: title,
  isCompleted: false
});
console.log('--------------');
tasks.forEach(function (task) {
  console.log(task);
});