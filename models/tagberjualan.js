'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tagBerjualan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tagBerjualan.init({
    gambar: DataTypes.TEXT,
    namaUsaha: DataTypes.STRING,
    alamat: DataTypes.STRING,
    noHP: DataTypes.STRING,
    siup: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tagBerjualan',
  });
  return tagBerjualan;
};