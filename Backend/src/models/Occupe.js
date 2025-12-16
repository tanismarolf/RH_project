const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Occupe = sequelize.define("Occupe", {
  id_employe: { type: DataTypes.INTEGER, primaryKey: true },
  id_poste: { type: DataTypes.INTEGER, primaryKey: true }
}, {
  tableName: "occupe",
  timestamps: false
});

module.exports = Occupe;
