'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Weapon', {
      WeaponID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Damage: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Rarity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Crit_Rate: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Weapon');
  }
};
