const readline = require('readline');
const { Player, Character, Weapon, Session, Team } = require('./models');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const menu = () => {
  console.log('Choose an option:');
  console.log('1. View all Player');
  console.log('2. View all Character');
  console.log('3. View all Weapon');
  console.log('4. View all Session');
  console.log('5. View all Team');
  console.log('6. Exit');

  rl.question('Enter your choice: ', async (choice) => {
    switch (choice) {
      case '1':
        await viewPlayer();
        break;
      case '2':
        await viewCharacter();
        break;
      case '3':
        await viewWeapon();
        break;
      case '4':
        await viewSession();
        break;
      case '5':
        await viewTeam();
        break;
      case '6':
        rl.close();
        return;
      default:
        console.log('Invalid choice. Please try again.');
        break;
    }
    menu(); 
  });
};

const viewPlayer = async () => {
  const player = await Player.findAll();
  console.log('Player:', JSON.stringify(player, null, 2));
};

const viewCharacter = async () => {
  const character = await Character.findAll();
  console.log('Character:', JSON.stringify(character, null, 2));
};

const viewWeapon = async () => {
  const weapon = await Weapon.findAll();
  console.log('Weapon:', JSON.stringify(weapon, null, 2));
};

const viewSession = async () => {
  const session = await Session.findAll();
  console.log('Session:', JSON.stringify(session, null, 2));
};

const viewTeam = async () => {
  const team = await Team.findAll();
  console.log('Team:', JSON.stringify(team, null, 2));
};

menu();
