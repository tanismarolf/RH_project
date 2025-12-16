const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const SuperviseDGCoord = sequelize.define("SuperviseDGCoord", {
  id_direction_generale: { type: DataTypes.INTEGER, primaryKey: true },
  id_coordination: { type: DataTypes.INTEGER, primaryKey: true }
}, {
  tableName: "supervise_dg_coord",
  timestamps: false
});

module.exports = SuperviseDGCoord;
