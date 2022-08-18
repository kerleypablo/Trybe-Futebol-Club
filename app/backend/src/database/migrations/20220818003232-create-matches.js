'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('matches', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncremet: true,
      allowNull: false,
    },
    home_teams: {
      type: Sequelize.INTEGER,
      foreignKey: true,
      references: {
        model: 'teams',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    home_team_goals: {
      type: Sequelize.INTEGER,
    },
    away_team: {
      type: Sequelize.INTEGER,
      foreignKey: true,
      references: {
        model: 'teams',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    away_team_goals: {
      type: Sequelize.INTEGER,
    },
    in_progess: {
      type: Sequelize.INTEGER,
    }
    }, 
  )},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.droopTable('matches');
  }
};
