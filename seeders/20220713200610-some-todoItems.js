"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Finish Reports",
          //important: true,
          deadLine: "20",
          // todoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Plan Birthday",
          //important: true,
          deadLine: "203",
          // todoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Go swimming",
          //important: false,
          deadLine: "27",
          // todoListId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Practice freekicks",
          //important: false,
          deadLine: "20",
          //todoListId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Score 60+ goals",
          //important: false,
          deadLine: "2020",
          // todoListId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
