const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id:
    {
      type: DataTypes.UUID,
      allowNull: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    tableName: 'users',
    timestamps: false,
  });
  User.beforeCreate((user) => { user.id = uuid(); }); // eslint-disable-line no-param-reassign
  return User;
};
