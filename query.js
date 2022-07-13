const User = require("./models").user;

// async function getAllUsers() {
//   try {
//     // This is how we can use a query method to get all the users from the database
//     // Selects all rows. Resolves with a (possibly empty) array
//     const allUsers = await User.findAll({ raw: true });
//     return allUsers;
//   } catch (e) {
//     console.log(e);
//   }
// }

// getAllUsers().then((users) => console.log(users));
const getAllUsers = async () => {
  try {
    const users = await User.findAll({ raw: true });
    console.log(users);
  } catch (e) {
    console.log(e.message);
  }
};
//getAllUsers();

const getUserById = async (id) => {
  try {
    const userId = await User.findByPk(id);
    console.log(userId);
  } catch (e) {
    console.log(e.message);
  }
};

//getUserById(4);
