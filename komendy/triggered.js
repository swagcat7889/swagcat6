/* eslint-disable linebreak-style */
const {SlashCommandBuilder} = require('@discordjs/builders');
var fetchUrl = require("fetch").fetchUrl;
const { port } = require(`../webconfig.json`);
module.exports = {
  data: new SlashCommandBuilder()
      .setName(`triggered`)
      .setDescription(`why are you so triggered?`)
      .addUserOption(option => option.setName('target').setDescription(`Who's mad today?`)),
  async execute(interaction) {
    const user = interaction.options.getUser('target');
    if (user) {
      fetchUrl(`http://localhost:1025/triggered.gif?avatar=${user.avatarURL()}`, function(error, meta, body){
        return interaction.reply({ files: [body], content: `${Date.now() - start}ms latency`, ephemeral: true});
      });
    }
    const start = Date.now();
    fetchUrl(`http://localhost:1025/triggered.gif?avatar=${interaction.user.avatarURL()}`, function(error, meta, body){
      return interaction.reply({ files: [body], content:`${Date.now() - start}ms latency`, ephemeral: true});
    });
    //interaction.reply({ files: [file], content: `${Date.now() - start}ms latency, but anyways here's your cat!` });
  },
};
