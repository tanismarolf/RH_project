const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Salaire = sequelize.define("Salaire", {
  id_salaire: { type: DataTypes.INTEGER, primaryKey: true },
  id_employe: { type: DataTypes.INTEGER, allowNull: true },
  annee_fiscale: { type: DataTypes.INTEGER, allowNull: true },
  salaire_brut: { type: DataTypes.DECIMAL(10,2), allowNull: true },
  salaire_net: { type: DataTypes.DECIMAL(10,2), allowNull: true },
  prime: { type: DataTypes.DECIMAL(10,2), allowNull: true }
}, {
  tableName: "salaire",
  timestamps: false
});

module.exports = Salaire;
