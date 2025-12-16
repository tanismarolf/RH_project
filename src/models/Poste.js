const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Poste = sequelize.define("Poste", {
  id_poste: { type: DataTypes.INTEGER, primaryKey: true },
  titre: { type: DataTypes.STRING(50), allowNull: true },
  description: { type: DataTypes.TEXT, allowNull: true },
  date_debut: { type: DataTypes.DATEONLY, allowNull: true },
  date_fin: { type: DataTypes.DATEONLY, allowNull: true },
  termes_de_reference: { type: DataTypes.TEXT, allowNull: true },
  fiche_de_poste: { type: DataTypes.TEXT, allowNull: true }
}, {
  tableName: "poste",
  timestamps: false
});

module.exports = Poste;
