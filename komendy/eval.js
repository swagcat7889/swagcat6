/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
const {SlashCommandBuilder} = require('@discordjs/builders');
module.exports = {
    data: new SlashCommandBuilder()
        .setName(`eval`)
        .setDescription(`Code evaluation`)
        .addStringOption((option) => option.setName('expression').setDescription('code...?')),
    async execute(interaction) {
        console.log(interaction.user.id)
        if (interaction.user.id !== `526711537373806592`) return interaction.reply(`Access denied`);
        const value = interaction.options.getString('expression');
        if (value == null) return interaction.reply(`No input`);
        try {
            out = await eval(value)
        } catch (error) {
            out = `An error has occurred: ${error}`
        }
        inspectOut = require(`util`).inspect(out);
        return interaction.reply(`In: ${value}\nOut: ${inspectOut}`);
    },
  };
  
