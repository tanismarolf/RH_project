const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const CoordonneCoordBAC = sequelize.define("CoordonneCoordBAC", {
  id_coordination: { type: DataTypes.INTEGER, primaryKey: true },   
  id_bac: { type: DataTypes.INTEGER, primaryKey: true }
}, {
  tableName: "coordonne_coord_bac",
  timestamps: false
});

module.exports = CoordonneCoordBAC;
