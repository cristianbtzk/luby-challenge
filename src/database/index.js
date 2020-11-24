import Sequelize from 'sequelize';
import dbConfig from '../config/database';
import Follow from '../models/Follow';
import User from '../models/User';
import Repository from '../models/Repository';
import Token from '../models/Token';
import Star from '../models/Star';

const models = [User, Follow, Repository, Star, Token];

const connection = new Sequelize(dbConfig);

models.forEach((model) => {
  model.init(connection);
});

models.forEach((model) => {
  if (model.associate) {
    model.associate(connection.models);
  }
});

export default connection;
