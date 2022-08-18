import { Model ,INTEGER, STRING } from 'sequelize';
import sequelize = require('sequelize');
import db from '.';

class Teams extends Model {
    id!: number;
    team_name!: string;
}

Teams.init({
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
      },
      team_name: {
        type: STRING,
      }
}, {
    sequelize: db,
    modelName: 'teams',
    underscored: true,
    timestamps: false
})

export default Teams;