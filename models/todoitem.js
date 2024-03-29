"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class todoItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      todoItem.belongsTo(models.todoList);
      todoItem.belongsToMany(models.tag, {
        through: "itemTags",
        foreignKey: "todoItemId",
      });
    }
  }
  todoItem.init(
    {
      task: DataTypes.STRING,
      deadLine: DataTypes.STRING,
      important: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "todoItem",
    }
  );
  return todoItem;
};
