module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'user'
  });
  User.associate = models => {
    User.belongsToMany(models.Skill, {
      through: models.UserSkill,
      foreignKey: 'skillId'
    });
  }
  return User;
};