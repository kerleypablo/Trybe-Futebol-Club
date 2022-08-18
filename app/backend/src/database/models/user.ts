import { Model ,INTEGER, STRING } from 'sequelize';
import sequelize = require('sequelize');
import db from '.';

class Users extends Model {
 id!: number;
 username!: string;
 role!: string;
 email!: string;
 password!: string;
}

Users.init({
    id: {
        type: INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: STRING,
        allowNull: false,
      },
      role: {
        type: STRING,
      },
      email: {
        type: STRING,
        allowNull: false,
      },
      password: {
        type: STRING,
        allowNull: false,
      }
    }, { 
      sequelize: db,
      modelName: 'users',
      underscored: true,
      timestamps: false
    }
)

export default Users;