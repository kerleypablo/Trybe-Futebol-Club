'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('teams', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
    },
    team_name: {
      type: Sequelize.STRING,
    }
  })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.droopTable('teams');
  }
};
