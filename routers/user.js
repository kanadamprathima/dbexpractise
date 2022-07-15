const express = require("express");
const User = require("../models").user;

const { Router } = express;

const router = new Router();

router.get("/users", async (req, res, next) => {
  try {
    const lists = await User.findAll();
    //console.log(lists);
    res.send(lists);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
router.get("/users/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const actualUser = await User.findByPk(id);
    res.send(actualUser);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.post("/users", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.create({ name, email, password });
    res.send(newUser);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.patch("/users/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const userUpdate = await User.findByPk(id);
    const updated = await userUpdate.update({ name });

    res.send(updated);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
router.delete("/users/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteById = await User.findByPk(id);
    await deleteById.destroy();
    res.send("user terminated");
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
