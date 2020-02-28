
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('registrations', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      allowNull: false,
    },
    course_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'courses',
        key: 'id',
      },
    },
    user_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    is_faculty: {
      type: Sequelize.BOOLEAN,
    },
  },
  {
    uniqueKeys: {
      actions_unique: {
        fields: ['course_id', 'user_id'],
      },
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('registrations'),
};
