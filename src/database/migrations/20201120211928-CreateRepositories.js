module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('repositories', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.literal('uuid_generate_v4()'),
    },
    user_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: '',
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
    public: {
      type: Sequelize.BOOLEAN,
    },
    slug: {
      type: Sequelize.STRING,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: async (queryInterface) => queryInterface.dropTable('repositories'),
};
