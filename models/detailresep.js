'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailResep extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DetailResep.init({
    namaResep: DataTypes.STRING,
    desk: DataTypes.STRING,
    gambar: DataTypes.TEXT,
    waktuMasak: DataTypes.INTEGER,
    porsi: DataTypes.INTEGER,
    kategori: {
      type: DataTypes.ENUM('makanan', 'minuman')
    },
    bahan: DataTypes.STRING,
    ket: DataTypes.STRING,
    video: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'DetailResep',
  });
  return DetailResep;
};