'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserHistory.belongsTo(models.User)
    }
  }
  UserHistory.init({
    win: DataTypes.STRING,
    lose: DataTypes.STRING,
    draw: DataTypes.STRING,
    UserId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'UserHistory',
  });
  return UserHistory;
};