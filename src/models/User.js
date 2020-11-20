import { Model, DataTypes } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      avatar: DataTypes.STRING,
      username: DataTypes.STRING,
      bio: DataTypes.STRING,
    }, {
      sequelize,
    });
  }
}

export default User;
