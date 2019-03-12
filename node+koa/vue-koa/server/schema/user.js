/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    password: {
      type: DataTypes.CHAR(128),
      allowNull: false
    },
    user_name: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'user'
  });
};
