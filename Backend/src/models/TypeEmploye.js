const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const TypeEmploye = sequelize.define("TypeEmploye", {
  id_type_employe: { type: DataTypes.INTEGER, primaryKey: true },
  type: { type: DataTypes.STRING(50), allowNull: true },
  date_embauchage: { type: DataTypes.DATEONLY, allowNull: true }
}, {
  tableName: "type_employe",
  timestamps: false
});

module.exports = TypeEmploye;
