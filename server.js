const express = require("express");

const userRouter = require("./routers/user");
//const Todo
//const TodoItem = require("./models").todoItem;
const app = express();
const PORT = 4000;
app.use(express.json());
app.use(userRouter);
app.listen(PORT, () => console.log("listener", PORT));
