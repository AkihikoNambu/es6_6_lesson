"use strict";

// ページタイトル: findの注意点
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
var incompletedTasks = tasks.find(function (task) {
  return task.isCompleted === false;
});
var undefinedTask = tasks.find(function (task) {
  return task.id === 100;
}); // NOTE: idが1と4のものを出したいけど、1しか出てないことに注目させる

console.log('--------------'); // console.log('【未完了タスク】');

console.log(incompletedTasks);
console.log(undefinedTask);