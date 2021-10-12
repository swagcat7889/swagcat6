/* eslint-disable linebreak-style */
const crypto = require(`crypto`);
const uuid = require("uuid");
const {SlashCommandBuilder} = require('@discordjs/builders');
module.exports = {
  data: new SlashCommandBuilder()
      .setName(`coupon`)
      .setDescription(`20% off for a swagcat!`),
  async execute(interaction) {
    const kupon = crypto.randomBytes(20).toString(`hex`);
    const id = uuid.v4();
    await interaction.reply(`Sent`);
    interaction.user.send(`Your 20% off swagcat coupon: \n\n\n||${kupon}||\n\n\n\nSave it somewhere secure!`);
  },
};
