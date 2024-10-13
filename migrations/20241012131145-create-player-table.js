'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Player', {
      PlayerID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Registration_Date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      Email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CharacterID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Characters',
          key: 'CharacterID',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Player');
  },
};
