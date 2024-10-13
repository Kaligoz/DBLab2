'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Character', {
      CharacterID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Level: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Rank: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Class: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      WeaponID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Weapon',
          key: 'WeaponID',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Character');
  }
};
