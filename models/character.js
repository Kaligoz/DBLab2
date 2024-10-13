module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define('Character', {
    CharacterID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Level: DataTypes.INTEGER,
    Rank: DataTypes.STRING,
    Class: DataTypes.STRING,
    WeaponID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Weapon',  
        key: 'WeaponID',
      },
    },
  },
  {
    tableName: 'Character', 
    timestamps: false,
  }
);

  Character.associate = (models) => {
    Character.belongsTo(models.Weapon, { foreignKey: 'WeaponID' });
    Character.hasOne(models.Player, { foreignKey: 'CharacterID' });
  };

  return Character;
};
