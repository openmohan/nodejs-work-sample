const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    id:
    {
      type: DataTypes.UUID,
      allowNull: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    tableName: 'courses',
    timestamps: false,
  });
  Course.beforeCreate((course) => { course.id = uuid(); }); // eslint-disable-line no-param-reassign
  return Course;
};
