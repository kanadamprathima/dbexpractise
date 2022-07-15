const User = require("./models").user;
const TodoList = require("./models").todoList;
const TodoItem = require("./models").todoItem;

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
getItemWithlist();
