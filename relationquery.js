const User = require("./models").user;
const TodoList = require("./models").todoList;

const getListWithUser = async () => {
  try {
    const lists = await TodoList.findAll({ raw: true, include: User });
    console.log(lists);
  } catch (e) {
    console.log(e.message);
  }
};
getListWithUser();
