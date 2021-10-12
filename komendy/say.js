/* eslint-disable linebreak-style */
const {SlashCommandBuilder} = require(`@discordjs/builders`);
module.exports = {
  data: new SlashCommandBuilder()
      .setName(`say`)
      .setDescription(`Says something for you!`)
      .addStringOption((option) => option.setName(`input`).setDescription(`What should i say for you?`)),
  async execute(interaction) {
    const value = interaction.options.getString(`input`);
    if (value == null) return interaction.reply(`<@!${interaction.user.id}>, i can't say nothing!`)
    await interaction.reply(`**${value}**\n\n${interaction.user.tag} <t:${Math.round(Date.now() / 1000)}>`);
  },
};
