const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const DirectionGenerale = sequelize.define("DirectionGenerale", {
  id_direction_generale: { type: DataTypes.INTEGER, primaryKey: true },
  description: { type: DataTypes.TEXT, allowNull: true }
}, {
  tableName: "direction_generale",
  timestamps: false
});

module.exports = DirectionGenerale;


/*onst { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const DirectionGenerale = sequelize.define("DirectionGenerale", {
  id_direction_generale: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: "direction_generale",
  timestamps: false
});

module.exports = DirectionGenerale;
*/