/* eslint-disable linebreak-style */
const {SlashCommandBuilder} = require('@discordjs/builders');
var fetchUrl = require("fetch").fetchUrl;
const { port } = require(`../webconfig.json`);
module.exports = {
  data: new SlashCommandBuilder()
      .setName(`drake`)
      .setDescription(`drake meme`)
      .addStringOption((option) => option.setName('input1').setDescription('drake 1'))
      .addStringOption((option) => option.setName('input2').setDescription('drake 2')),
  async execute(interaction) {
    const start = Date.now();
    const value = interaction.options.getString('input1');
    if (value == null) return interaction.reply(`drake 1 is empty!!`);
    const value2 = interaction.options.getString('input2');
    if (value2 == null) return interaction.reply(`drake 2 is empty!!`);
    fetchUrl(`http://localhost:1025/drake.png?txt1=${value}&txt2=${value2}`, function(error, meta, body){
      return interaction.reply({ files: [body], content: `${Date.now() - start}ms latency`, ephemeral: true});
    });
    //interaction.reply({ files: [file], content: `${Date.now() - start}ms latency, but anyways here's your cat!` });
  },
};
