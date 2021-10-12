/* eslint-disable linebreak-style */
const {SlashCommandBuilder} = require('@discordjs/builders');
var fetchUrl = require("fetch").fetchUrl;
const { port } = require(`../webconfig.json`);
module.exports = {
  data: new SlashCommandBuilder()
      .setName(`help`)
      .setDescription(`Helps you with commands`)
      .addStringOption((option) => option.setName('input').setDescription('the command')),
  async execute(interaction) {
    const start = Date.now();
    const value = interaction.options.getString('input');
    switch (value) {
        case `help`:
      interaction.reply('help command\nusage: /help <command>\nex. use: /help help (you are seeing this now)\nrequired permissions: `-`\nDescription:');
      break;
        case `eval`:
      interaction.reply('eval command\nusage: /eval <javascript_expression>\nex. use: /eval interaction.client.ws.ping (returns bot ping)\nrequired permissions: `Developer`\nDescription: Evaluates javascript expression');
      break;
      default:
          interaction.reply(`Command not documented, you might be lost...`);
          break;
    }
  },
};
