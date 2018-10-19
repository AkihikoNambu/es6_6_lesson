// NOTE: if-elseの分岐はいったんなし
// import readlineSync from 'readline-sync';
//
// let tasks = [
// 	{id: 1, title: "本を買う", isCompleted: false, description: "javaScriptの本を買う"},
// 	{id: 2, title: "progateをする", isCompleted: true, description: "レベルを3上げる"},
// 	{id: 3, title: "買い物をする", isCompleted: true, description: "新しい服を買う"},
//   {id: 4, title: "ウォーキングする", isCompleted: false, description: "30分歩く"},
// ];
//
// tasks.forEach((task) => {
//   console.log('----------------')
//   console.log(`ID: ${task.id}`);
//   console.log(`タスク名: ${task.title}`);
// });
//
// console.log('-----------------');
// const id = readlineSync.questionInt('詳細をみるTODOのidを入力してください: ');
// const task = tasks.find((task) => {return task.id === id});
//
// console.log('-----------------');
// if (task === undefined) {
//   console.log(`idが${id}のタスクはありません`);
// } else {
//   console.log(`ID: ${task.id}`);
//   console.log(`タスク名: ${task.title}`);
//   console.log(`詳細: ${task.description}`);
// }
