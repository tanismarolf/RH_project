const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const AtteintNiveauEtude = sequelize.define("AtteintNiveauEtude", {
  id_employe: { type: DataTypes.INTEGER, primaryKey: true },
  id_niveau_etude: { type: DataTypes.INTEGER, primaryKey: true }
}, {
  tableName: "atteint_niveau_etude",
  timestamps: false
});

module.exports = AtteintNiveauEtude;
