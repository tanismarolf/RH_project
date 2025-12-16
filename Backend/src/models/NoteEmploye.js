const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const NoteEmploye = sequelize.define("NoteEmploye", {
  id_note_employe: { type: DataTypes.INTEGER, primaryKey: true },
  id_employe: { type: DataTypes.INTEGER, allowNull: true },
  annee_fiscale: { type: DataTypes.INTEGER, allowNull: true },
  note: { type: DataTypes.DECIMAL(4,2), allowNull: true },
  mention: { type: DataTypes.STRING(50), allowNull: true },
  description: { type: DataTypes.TEXT, allowNull: true }
}, {
  tableName: "note_employe",
  timestamps: false
});

module.exports = NoteEmploye;
