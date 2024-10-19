const readline = require('readline');
const { Player, Character, Weapon, Session, Team } = require('./models');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const menu = () => {
  console.log('Choose an option:');
  console.log('1. View all Tabless');
  console.log('2. Delete from Player');
  console.log('3. Delete from Character');
  console.log('4. Delete from Weapon');
  console.log('5. Delete from Session');
  console.log('6. Delete from Team');
  console.log('7. Add to Player');
  console.log('8. Add to Character');
  console.log('9. Add to Weapon');
  console.log('10. Add to Session');
  console.log('11. Add to Team');
  console.log('12. Exit');

  rl.question('Enter your choice: ', async (choice) => {
    switch (choice) {
      case '1':
        await viewPlayer();
        await viewCharacter();
        await viewWeapon();
        await viewSession();
        await viewTeam();
        break;
      case '2':
        await deletePlayer();
        break;
      case '3':
        await deleteCharacter();
        break;
      case '4':
        await deleteWeapon();
        break;
      case '5':
        await deleteSession();
        break;
      case '6':
        await deleteTeam();
        break;
      case '7':
        await addPlayer();
        break;
      case '8':
        await addCharacter();
        break;
      case '9':
        await addWeapon();
        break;
      case '10':
        await addSession();
        break;
      case '11':
        await addTeam();
        break;
      case '12':
        rl.close();
        return;
      default:
        console.log('Invalid choice. Please try again.');
        break;
    }
    menu();
  });
};

// viewing functions

const viewPlayer = async () => {
  const player = await Player.findAll();
  console.log('Players:', JSON.stringify(player, null, 2));
};

const viewCharacter = async () => {
  const character = await Character.findAll();
  console.log('Characters:', JSON.stringify(character, null, 2));
};

const viewWeapon = async () => {
  const weapon = await Weapon.findAll();
  console.log('Weapons:', JSON.stringify(weapon, null, 2));
};

const viewSession = async () => {
  const session = await Session.findAll();
  console.log('Sessions:', JSON.stringify(session, null, 2));
};

const viewTeam = async () => {
  const team = await Team.findAll();
  console.log('Teams:', JSON.stringify(team, null, 2));
};

// deleting functions

const deletePlayer = async () => {
  rl.question('Enter Player ID to delete: ', async (playerID) => {
    await Player.destroy({
      where: { PlayerID: playerID },
    });
    console.log(`Player with ID ${playerID} deleted.`);
    menu();
  });
};

const deleteCharacter = async () => {
  rl.question('Enter Character ID to delete: ', async (characterID) => {
    await Character.destroy({
      where: { CharacterID: characterID },
    });
    console.log(`Character with ID ${characterID} deleted.`);
    menu();
  });
};

const deleteWeapon = async () => {
  rl.question('Enter Weapon ID to delete: ', async (weaponID) => {
    await Weapon.destroy({
      where: { WeaponID: weaponID },
    });
    console.log(`Weapon with ID ${weaponID} deleted.`);
    menu();
  });
};

const deleteSession = async () => {
  rl.question('Enter Session ID to delete: ', async (sessionID) => {
    await Session.destroy({
      where: { SessionID: sessionID },
    });
    console.log(`Session with ID ${sessionID} deleted.`);
    menu();
  });
};

const deleteTeam = async () => {
  rl.question('Enter Team ID to delete: ', async (teamID) => {
    await Team.destroy({
      where: { TeamID: teamID },
    });
    console.log(`Team with ID ${teamID} deleted.`);
    menu();
  });
};

// adding functions

const addPlayer = async () => {
  rl.question('Enter Player Name: ', async (name) => {
    rl.question('Enter Registration Date (YYYY-MM-DD): ', async (regDate) => {
      rl.question('Enter Email: ', async (email) => {
        rl.question('Enter Password: ', async (password) => {
          rl.question('Enter Character ID (optional, press Enter to skip): ', async (characterID) => {
            const newPlayer = await Player.create({
              Name: name,
              Registration_Date: regDate,
              Email: email,
              Password: password,
              CharacterID: characterID || null  // Allow null if no character
            });
            console.log('New player added:', JSON.stringify(newPlayer, null, 2));
            menu();
          });
        });
      });
    });
  });
};

const addCharacter = async () => {
  rl.question('Enter Character Level: ', async (level) => {
    rl.question('Enter Character Rank: ', async (rank) => {
      rl.question('Enter Character Class: ', async (characterClass) => {
        rl.question('Enter Weapon ID (optional, press Enter to skip): ', async (weaponID) => {
          const newCharacter = await Character.create({
            Level: level,
            Rank: rank,
            Class: characterClass,
            WeaponID: weaponID || null  // Allow null if no weapon
          });
          console.log('New character added:', JSON.stringify(newCharacter, null, 2));
          menu();
        });
      });
    });
  });
};

const addWeapon = async () => {
  rl.question('Enter Weapon Damage: ', async (damage) => {
    rl.question('Enter Weapon Type: ', async (type) => {
      rl.question('Enter Weapon Rarity: ', async (rarity) => {
        rl.question('Enter Weapon Critical Rate: ', async (critRate) => {
          const newWeapon = await Weapon.create({
            Damage: damage,
            Type: type,
            Rarity: rarity,
            Crit_Rate: critRate
          });
          console.log('New weapon added:', JSON.stringify(newWeapon, null, 2));
          menu();
        });
      });
    });
  });
};

const addSession = async () => {
  rl.question('Enter Session Start Time (YYYY-MM-DD HH:mm:ss): ', async (timeStart) => {
    rl.question('Enter Session End Time (YYYY-MM-DD HH:mm:ss): ', async (timeEnd) => {
      rl.question('Enter Team ID: ', async (teamID) => {
        const newSession = await Session.create({
          Time_Start: timeStart,
          Time_End: timeEnd,
          TeamID: teamID
        });
        console.log('New session added:', JSON.stringify(newSession, null, 2));
        menu();
      });
    });
  });
};

const addTeam = async () => {
  rl.question('Enter Number of Players in Team: ', async (numPlayers) => {
    rl.question('Enter Total Points of Team: ', async (totalPoints) => {
      rl.question('Enter Team Name: ', async (teamName) => {
        const newTeam = await Team.create({
          Number_Players: numPlayers,
          Total_Points: totalPoints,
          Name: teamName
        });
        console.log('New team added:', JSON.stringify(newTeam, null, 2));
        menu();
      });
    });
  });
};


menu();
