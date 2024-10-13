module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    TeamID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Number_Players: DataTypes.INTEGER,
    Total_Points: DataTypes.INTEGER,
    Name: DataTypes.STRING,
  },
  {
    tableName: 'Team', 
    timestamps: false,
  }
);

  Team.associate = (models) => {
    Team.hasMany(models.Session, { foreignKey: 'TeamID' });
  };

  return Team;
};
