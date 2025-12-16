const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Coordination = sequelize.define("coordination", {
  id_coordination: { type: DataTypes.INTEGER, primaryKey: true,autoIncrement: true },
  nom: {type: DataTypes.STRING(50), allowNull: false},
  description: { type: DataTypes.TEXT, allowNull: true }
}, {
  tableName: "coordination",
  timestamps: false
});

module.exports = Coordination;
