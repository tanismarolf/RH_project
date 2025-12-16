const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Possede = sequelize.define("Possede", {
  id_service: { type: DataTypes.INTEGER, primaryKey: true },
  id_section: { type: DataTypes.INTEGER, primaryKey: true }
}, {
  tableName: "possede",
  timestamps: false
});

module.exports = Possede;
