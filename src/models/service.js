const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Service = sequelize.define("Service", {
  id_service: { type: DataTypes.INTEGER, primaryKey: true },
  nom: { type: DataTypes.STRING(50), allowNull: true },
  description: { type: DataTypes.TEXT, allowNull: true }
}, {
  tableName: "service",
  timestamps: false
});

module.exports = Service;
