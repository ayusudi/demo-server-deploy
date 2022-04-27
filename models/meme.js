'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Meme.belongsTo(models.User)
    }
  }
  Meme.init({
    image: DataTypes.STRING,
    caption: DataTypes.STRING,
    category: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Meme',
  });
  return Meme;
};

/*
Meme.update({
  image : req.body...,
  caption: req.body...
  categoryId : req.body.categoryId

}, { where condition})
*/