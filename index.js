const printTasks = (tasks) => {
	console.log("-------------------");
	console.log("【ToDo】");
	tasks.forEach((task, index) => {
	  console.log(index + 1 + ": " + task.text);
	});
}

let tasks = [
	{id: 1, text: "読書", done: true},
	{id: 2, text: "progate", done: false},
	{id: 3, text: "ジム", done: false}
];
printTasks(tasks);

tasks.push({id: 4, text: "買い物", done: false});
console.log('')
console.log('新しいtodoを追加しました');
printTasks(tasks);

const deleteTask = tasks.find((task) => {task.id === 2});
tasks.splice(tasks.indexOf(deleteTask), 1);
console.log('')
console.log('id: 2のtodoを削除しました');
printTasks(tasks);

tasks = tasks.map((task) => {
	if (task.done === false) {
		task.done = true;
	}
	return task;
})

console.log('')
console.log('すべてDoneにしました。')
printTasks(tasks)
