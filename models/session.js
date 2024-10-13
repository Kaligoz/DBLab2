module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    SessionID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Time_Start: DataTypes.DATE,
    Time_End: DataTypes.DATE,
    TeamID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Team',  // refers to table name
        key: 'TeamID',
      },
    },
  },
    {
      tableName: 'Session', 
      timestamps: false,
    }
  );

  Session.associate = (models) => {
    Session.belongsTo(models.Team, { foreignKey: 'TeamID' });
  };

  return Session;
};
