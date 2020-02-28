
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('courses', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      ALLOW_NULL: false,
      unique: true,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('courses'),
};
