const User = require("./models").user;
const TodoList = require("./models").todoList;
const TodoItem = require("./models").todoItem;
const Tag = require("./models").tag;
const getListWithUser = async () => {
  try {
    const lists = await TodoList.findAll({ raw: true, include: User });
    console.log(lists);
  } catch (e) {
    console.log(e.message);
  }
};
//getListWithUser();
const getItemWithlist = async () => {
  try {
    const lists = await TodoItem.findAll({ raw: true, include: TodoList });
    console.log(lists);
  } catch (e) {
    console.log(e.message);
  }
};
//getItemWithlist();
//Get important TodoItems with the name of the list they belong to.
const specificItem = async () => {
  try {
    const todos = await TodoItem.findAll({ where: { task: "Go swimming" } });
    console.log(todos);
  } catch (e) {
    console.log(e.message);
  }
};
//specificItem();
const getItemWithtags = async () => {
  try {
    const lists = await TodoItem.findAll({ raw: true, include: Tag });
    console.log(lists);
  } catch (e) {
    console.log(e.message);
  }
};
getItemWithtags();
