/* eslint-disable linebreak-style */
const {SlashCommandBuilder} = require('@discordjs/builders');
var fetchUrl = require("fetch").fetchUrl;
const { port } = require(`../webconfig.json`);
module.exports = {
  data: new SlashCommandBuilder()
      .setName(`fox`)
      .setDescription(`Random fox! 🦊`),
  async execute(interaction) {
    const start = Date.now();
    fetchUrl(`http://localhost:${port}/fox`, function(error, meta, body){
      return interaction.reply({ content: `${body}`, ephemeral: true});
    });
    //interaction.reply({ files: [file], content: `${Date.now() - start}ms latency, but anyways here's your cat!` });
  },
};
