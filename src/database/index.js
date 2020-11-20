import Sequelize from 'sequelize';
import dbConfig from '../config/database';
import User from '../models/User';
import Repository from '../models/Repository';

const models = [User, Repository];

const connection = new Sequelize(dbConfig);

models.forEach((model) => {
  model.init(connection);
  if (model.associate) {
    model.associate(connection.models);
  }
});
User.init(connection);

export default connection;
