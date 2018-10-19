"use strict";

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NOTE: 別ファイルにおく可能性もあり
var tasks = [{
  id: 1,
  title: "本を買う",
  isCompleted: false,
  description: "javaScriptの本を買う"
}, {
  id: 2,
  title: "progateをする",
  isCompleted: true,
  description: "レベルを3上げる"
}, {
  id: 3,
  title: "買い物をする",
  isCompleted: true,
  description: "新しい服を買う"
}, {
  id: 4,
  title: "ウォーキングする",
  isCompleted: false,
  description: "30分歩く"
}];
tasks.forEach(function (task) {
  console.log("".concat(task.id, ": ").concat(task.title));
});
console.log('-----------------');

var id = _readlineSync.default.questionInt('詳細をみるTODOのidを入力してください: ');

var task = tasks.find(function (task) {
  return task.id === id;
});
console.log('【タスク詳細】');
console.log("ID: ".concat(task.id));
console.log("\u30BF\u30B9\u30AF\u540D: ".concat(task.title));
console.log("\u8A73\u7D30: ".concat(task.description));