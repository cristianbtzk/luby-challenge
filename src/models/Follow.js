const { Model } = require('sequelize');

class Follow extends Model {
  static init(sequelize) {
    super.init({}, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'follower_id', as: 'Follower' });
    this.belongsTo(models.User, { foreignKey: 'followed_id', as: 'Following' });
  }
}

export default Follow;
