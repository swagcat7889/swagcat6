/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
  data: new SlashCommandBuilder()
      .setName(`eval`)
      .setDescription(`code execution for the developer`)
      .addStringOption((option) => option.setName('expression').setDescription('Code here')),
  async execute(interaction) {
    await interaction.deferReply();
    const value = interaction.options.getString('expression');
    if (value == null) return interaction.editReply(`Było by mi milej, gdybyś coś podał!`);
    if (interaction.user.id == `526711537373806592`) return interaction.reply(`ok`);
    const startTimestamp = Date.now();
    const client = interaction.client;
    message = interaction.message;
    channel = interaction.channel;
    try {
      out = await eval(val);
      inspectedOut = require(`util`).inspect(out);
    } catch (error) {
      out = `Nie bo error: ${error}`;
      inspectedOut = require(`util`).inspect(out);
    }
    if (1950 > inspectedOut.length) {
      const now = Date.now();
      await interaction.editReply({ content: `Wykonano`, ephemeral: true });
      //        await interaction.followUp(``);
      interaction.followUp({ content: `Wejście: ${val}\n\nWyjście: ${inspectedOut}\nCzas przetwarzania: ${now - startTimestamp}ms`, ephemeral: true });
    } else if (1950 < inspectedOut.length) {
      console.log(`${inspectedOut}`);
      interaction.editReply(`Wysłałem wyjściowe do konsoli.`);
    }
  },
};
