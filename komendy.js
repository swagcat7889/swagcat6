const fs = require('fs');
const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');
const {clientId, guildId, token} = require('./config.json');

const commands = [];
const commandFiles = fs.readdirSync('./komendy').filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./komendy/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({version: '9'}).setToken(`${token}`);

// rest.put(Routes.applicationGuildCommands(`892879256068182037`, `892872800967204935`), { body: commands })
//	.then(() => console.log('Gotowe! (Support)'))
//	.catch(console.error);
//  rest.put(Routes.applicationGuildCommands(`892879256068182037`, `717767643225915483`), { body: commands })
// .then(() => console.log('Gotowe! (Ludzie JKUsera)'))
// .catch(console.error);
//    rest.put(Routes.applicationGuildCommands(`${clientId}`, `${guildId}`), { body: commands })
//	.then(() => undefined)
//	.catch(console.error);
//	rest.put(Routes.applicationGuildCommands(`${clientId}`, `861911543858855936`), { body: commands })
//	.then(() => undefined)
//	.catch(console.error);
rest.put(Routes.applicationCommands(clientId), {body: commands})
    .then(() => undefined)
    .catch(console.error);
