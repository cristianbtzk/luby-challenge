module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'luby',
  define: {
    timestamps: true,
    underscored: true,
  },
};
