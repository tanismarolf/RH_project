const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Utilisateur = sequelize.define("Utilisateur", {
  id_utilisateur: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM("admin", "user", "manager"),
    allowNull: false,
    defaultValue: "user"
  }
}, {
  tableName: "utilisateur",
  timestamps: false
});

module.exports = Utilisateur;
