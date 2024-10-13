'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Session', {
      SessionID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Time_Start: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      Time_End: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      TeamID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Team',
          key: 'TeamID',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Session');
  }
};
