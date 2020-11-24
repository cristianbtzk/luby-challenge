const { Model } = require('sequelize');

class Star extends Model {
  static init(sequelize) {
    super.init({}, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'User' });
    this.belongsTo(models.Repository, { foreignKey: 'repository_id', through: 'stars', as: 'Repository' });
  }
}

export default Star;
