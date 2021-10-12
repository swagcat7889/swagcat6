/* eslint-disable linebreak-style */
const {SlashCommandBuilder} = require('@discordjs/builders');
module.exports = {
  data: new SlashCommandBuilder()
      .setName(`ping`)
      .setDescription(`Returns gateway latency`),
  async execute(interaction) {
    await interaction.reply(`Pong! ${interaction.client.ws.ping}ms gateway latency!`);
  },
};
