if(require('discord.js').version < `13.0.0`) {
  throw new Error(`o kurwa jakim trzeba być debilem, aby odpalić tego bota w wersji starszej niż v13?`);
}
if(require('discord.js').version > `14.0.0`) {
  throw new Error(`Czekaj co? To już v14 released?`);
}

const fs = require('fs');
const {Client, Collection, Intents} = require('discord.js');
const {token} = require('./config.json');
const wait = require('util').promisify(setTimeout);
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES], ws: { properties: { $browser: "Discord iOS"}}});
client.commands = new Collection();
const commandFiles = fs.readdirSync('./komendy').filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./komendy/${file}`);
  console.log(`ok: ${file}`);
  client.commands.set(command.data.name, command);
}

client.once('ready', async (client) => {
  console.log('Gotowe!');
  await wait(250);
  const { version } = require(`./package.json`);
  client.user.setActivity(`SwagCat ${version}`, {type: `PLAYING`});
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.user.id == 646526456561795113) return;

  const command = client.commands.get(interaction.commandName);

  //	if (!command) return;

  try {
    await command.execute(interaction, command);
  } catch (error) {
    console.error(error);
		return interaction.reply({content: 'swag coś rozjebał :neutral_face:', ephemeral: true});
  }
});

client.login(token);
client.on('shardError', (error) => {
  console.error('błąd sharda:', error);
});
process.on('unhandledRejection', (error) => { 
  console.error('błąd node.js (unhandled rejection):', error);
});
client.on('error', (error) => {
  console.error('error (zwykły error): ', error);
});
