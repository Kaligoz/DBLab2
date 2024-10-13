module.exports = (sequelize, DataTypes) => {
  const Weapon = sequelize.define('Weapon', {
    WeaponID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Damage: DataTypes.INTEGER,
    Type: DataTypes.STRING,
    Rarity: DataTypes.STRING,
    Crit_Rate: DataTypes.FLOAT,
  },
  {
    tableName: 'Weapon', 
    timestamps: false,
  }
);

  Weapon.associate = (models) => {
    Weapon.hasOne(models.Character, { foreignKey: 'WeaponID' });
  };

  return Weapon;
};
