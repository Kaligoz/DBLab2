module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define('Player', {
        PlayerID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Name: DataTypes.STRING,
        Registration_Date: DataTypes.DATE,
        Email: DataTypes.STRING,
        Password: DataTypes.STRING,
        CharacterID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Character', 
                key: 'CharacterID',
            },
        },
    }, {
        tableName: 'Player', 
        timestamps: false,
    });
  
    Player.associate = (models) => {
        Player.belongsTo(models.Character, { foreignKey: 'CharacterID' });
    };
  
    return Player;
  };
  