"use strict";

var tasks = [{
  title: "本を買う",
  isCompleted: true
}, {
  title: "progateをする",
  isCompleted: true
}, {
  title: "買い物をする",
  isCompleted: false
}];
tasks.forEach(function (task) {
  console.log(task);
});