import { Model ,INTEGER } from 'sequelize';
import sequelize = require('sequelize');
import db from '.';
import Teams from './Team';

class Matches extends Model {
    id!: number;
    home_team!: number;
    home_team_goal!: number;
    away_team!: number;
    away_team_goals!: number;
    in_progress!: number;
}

Matches.init({
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      home_team: {
        type: INTEGER,
        references: {
          model: 'teams',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      home_team_goals: {
        type: INTEGER,
      },
      away_team: {
        type: INTEGER,
        references: {
          model: 'teams',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      away_team_goals: {
        type: INTEGER,
      },
      in_progress: {
        type: INTEGER,
      }
}, {
    sequelize: db,
    modelName: 'tmatches',
    underscored: true,
    timestamps: false
})

Matches.belongsTo(Teams, { foreignKey: 'home_team' as 'team'});
Matches.belongsTo(Teams, { foreignKey: 'away_team' as 'team'});
Matches.hasMany(Matches, { foreignKey: 'homeTeam', as: 'homeTeam' });
Matches.hasMany(Matches, { foreignKey: 'awayTeam', as: 'awayTeam' });

export default Matches;