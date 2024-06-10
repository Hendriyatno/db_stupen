'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tagBerjualans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gambar: {
        type: Sequelize.TEXT
      },
      namaUsaha: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      noHP: {
        type: Sequelize.STRING
      },
      siup: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('tagBerjualans');
  }
};