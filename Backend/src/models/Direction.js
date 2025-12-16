const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Direction = sequelize.define("Direction", {
  id_direction: { type: DataTypes.INTEGER, primaryKey: true },
  nom: { type: DataTypes.STRING(50), allowNull: true },
  description: { type: DataTypes.TEXT, allowNull: true }
}, {
  tableName: "direction",
  timestamps: false
});

module.exports = Direction;
