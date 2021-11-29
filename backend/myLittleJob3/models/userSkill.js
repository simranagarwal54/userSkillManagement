module.exports = (sequelize, DataTypes) => {
    const UserSkill = sequelize.define("UserSkill", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
        userId: {
        type: DataTypes.INTEGER,
      },
        skillId: {
        type: DataTypes.INTEGER,
      },
    });
    UserSkill.associate = models => {
        UserSkill.belongsTo(models.User, {
        foreignKey: 'userId'
      });
      UserSkill.belongsTo(models.Skill, {
        foreignKey: 'skillId'
      });
    }
    return UserSkill;
  };