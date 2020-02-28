const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define('Registration', {
    id:
    {
      type: DataTypes.UUID,
      allowNull: true,
      primaryKey: true,
    },
    course_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: 'clusters',
      referenceKey: 'id',
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: 'users',
      referenceKey: 'id',
    },
    is_faculty: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    tableName: 'registrations',
    timestamps: false,
    uniqueKeys: {
      actions_unique: {
        fields: ['course_id', 'user_id'],
      },
    },

  });
  Registration.beforeCreate((reg) => { reg.id = uuid(); }); // eslint-disable-line no-param-reassign
  return Registration;
};
