import readlineSync from 'readline-sync';

let tasks = [
	"本を買う", "progateをする", "買い物をする",
];

tasks.forEach((task) => {
  console.log(task);
});

console.log('--------------')
const task = readlineSync.question('新しいTodoを入力してください: ');
tasks.push(task);

console.log('--------------')
tasks.forEach((task) => {
  console.log(task);
});
