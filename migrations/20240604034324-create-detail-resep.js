'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DetailReseps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      namaResep: {
        type: Sequelize.STRING
      },
      desk: {
        type: Sequelize.STRING
      },
      gambar: {
        type: Sequelize.TEXT
      },
      waktuMasak: {
        type: Sequelize.INTEGER
      },
      porsi: {
        type: Sequelize.INTEGER
      },
      kategori: {
        type: Sequelize.ENUM("makanan", "minuman")
      },
      bahan: {
        type: Sequelize.STRING
      },
      ket: {
        type: Sequelize.STRING
      },
      video: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DetailReseps');
  }
};