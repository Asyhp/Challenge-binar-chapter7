'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserBiodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserBiodata.belongsTo(models.User)
    }
  }
  UserBiodata.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: {
      type: DataTypes.ENUM,
      values: ["male", "female", "null"],
      validate: {
        isIn: [["male", "female", "null"]],
      }
    },
    birthdate: DataTypes.DATE,
    UserId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'UserBiodata',
  });
  return UserBiodata;
};