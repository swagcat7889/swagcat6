/* eslint-disable linebreak-style */
const {SlashCommandBuilder} = require('@discordjs/builders');
module.exports = {
  data: new SlashCommandBuilder()
      .setName(`rickroll`)
      .setDescription(`Never gonna give you up`),
  async execute(interaction) {
    await interaction.reply(`[okay](<https://youtu.be/fC7oUOUEEi4>)`);
  },
};
