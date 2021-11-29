module.exports = (sequelize, DataTypes) => {
    const Skill = sequelize.define("Skill", {
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }
    },{
        tableName: 'skill'
    });
    return Skill;
  };