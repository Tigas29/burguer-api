module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  usernmae: 'postgres',
  password: 'postgres',
  database: 'burger-api',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
