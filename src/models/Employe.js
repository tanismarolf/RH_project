const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Employe = sequelize.define("Employe", {
  id_employe: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nom: { type: DataTypes.STRING(25), allowNull: true },
  prenom: { type: DataTypes.STRING(50), allowNull: true },
  code: { type: DataTypes.STRING(50), allowNull: true },
  email: { type: DataTypes.STRING(255), allowNull: true },
  adresse: { type: DataTypes.STRING(255), allowNull: true },
  date_naissance: { type: DataTypes.DATEONLY, allowNull: true },
  lieu_naissance: { type: DataTypes.STRING(255), allowNull: true },
  nom_du_dependant: { type: DataTypes.STRING(255), allowNull: true },
  groupe_sanguin: { type: DataTypes.STRING(50), allowNull: true },
  telephone: { type: DataTypes.STRING(20), allowNull: true },
  etat_matrimonial: { type: DataTypes.STRING(50), allowNull: true },
  nif: { type: DataTypes.STRING(50), allowNull: true },
  ninu: { type: DataTypes.STRING(50), allowNull: true },
  type: { type: DataTypes.STRING(50), allowNull: true }
}, {
  tableName: "employe",
  timestamps: false
});

module.exports = Employe;


