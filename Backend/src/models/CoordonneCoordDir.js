const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const CoordonneCoordDir = sequelize.define("CoordonneCoordDir", {
  id_coordination: { type: DataTypes.INTEGER, primaryKey: true },
  id_direction: { type: DataTypes.INTEGER, primaryKey: true }
}, {
  tableName: "coordonne_coord_dir",
  timestamps: false
});

module.exports = CoordonneCoordDir;
