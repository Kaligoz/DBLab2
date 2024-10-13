'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Team', {
      TeamID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Number_Player: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Total_Points: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Team');
  }
};
