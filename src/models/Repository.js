import { Model, DataTypes } from 'sequelize';

class Repository extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      public: DataTypes.BOOLEAN,
      slug: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'RepositoryOwner' });
    this.hasMany(models.Star, { foreignKey: 'repository_id', as: 'Stars' });
  }
}

export default Repository;
