const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const AppartientTypeEmploye = sequelize.define("AppartientTypeEmploye", {
  id_employe: { type: DataTypes.INTEGER, primaryKey: true },
  id_type_employe: { type: DataTypes.INTEGER, primaryKey: true }
}, {
  tableName: "appartient_type_employe",
  timestamps: false
});

module.exports = AppartientTypeEmploye;
