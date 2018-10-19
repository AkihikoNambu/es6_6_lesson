import readlineSync from 'readline-sync';

let tasks = [
	{title: "本を買う", isCompleted: false},
	{title: "progateをする", isCompleted: true},
	{title: "買い物をする", isCompleted: true},
];

tasks.forEach((task) => {
  console.log(task);
});

console.log('--------------')
const title = readlineSync.question('新しいTodoを入力してください: ');
tasks.push({title: title, isCompleted: false});

console.log('--------------')
tasks.forEach((task) => {
  console.log(task);
});
