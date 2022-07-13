//Searches for all users and logs them.
const TodoItem = require("./models").todoItem;
const User = require("./models").user;

const getAllUsers = async () => {
  try {
    const users = await User.findAll({ raw: true });
    console.log(users);
  } catch (e) {
    console.log(e.message);
  }
};
//getAllUsers();
//Searches for all TodoItems and logs them (use .toJSON() or { raw: true } in the query).
const getAllItems = async () => {
  try {
    const items = await TodoItem.findAll({ raw: true });
    console.log(items);
  } catch (e) {
    console.log(e.message);
  }
};
//getAllItems();
//Searches for a user by primary key.
const getUserById = async (id) => {
  try {
    const userId = await User.findByPk(id);
    console.log(userId);
  } catch (e) {
    console.log(e.message);
  }
};

//getUserById(4);
// Creates a new user. (Once you manage to create this user, delete or comment out the function call as to not run it again, otherwise we'll get an error).

const createUser = async (name, email, phone) => {
  try {
    const newUser = await User.create({
      name: name,
      email: email,
      phone: phone,
    });
  } catch (e) {
    console.log(e.message);
  }
};
//createUser("prathima", "p@gmail.com", 0999);

//Deleteuser
const deleteUser = async (id) => {
  try {
    await User.destroy(id);
  } catch (e) {
    console.log(e.message);
  }
};
deleteUser(16);

//Searches only for important TodoItems
