const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cinemas', {
    cinema_num: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    addr: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    addr_detail: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cinema: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'regions',
        key: 'grade'
      }
    }
  }, {
    sequelize,
    tableName: 'cinemas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cinema_num" },
        ]
      },
      {
        name: "cinemas_FK",
        using: "BTREE",
        fields: [
          { name: "grade" },
        ]
      },
    ]
  });
};
