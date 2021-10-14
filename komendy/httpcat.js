/* eslint-disable linebreak-style */
const { SlashCommandBuilder } = require("@discordjs/builders");
var fetchUrl = require("fetch").fetchUrl;
const { port } = require(`../webconfig.json`);
module.exports = {
  data: new SlashCommandBuilder()
    .setName(`httpcat`)
    .setDescription(`http error cat, meow? 😊`)
    .addStringOption((option) =>
      option.setName("number").setDescription("good question")
    ),
  async execute(interaction) {
    const value = interaction.options.getString("number");
    switch (value) {
      case `0`:
        interaction.reply(`https://http.cat/0`);
        break;
      case `100`:
        interaction.reply(`https://http.cat/100`);
        break;
      case `101`:
        interaction.reply(`https://http.cat/101`);
        break;
      case `102`:
        interaction.reply(`https://http.cat/102`);
        break;
      case `200`:
        interaction.reply(`https://http.cat/200`);
        break;
      case `201`:
        interaction.reply(`https://http.cat/201`);
        break;
      case `202`:
        interaction.reply(`https://http.cat/202`);
        break;
      case `203`:
        interaction.reply(`https://http.cat/203`);
        break;
      case `204`:
        interaction.reply(`https://http.cat/204`);
        break;
      case `206`:
        interaction.reply(`https://http.cat/206`);
        break;
      case `207`:
        interaction.reply(`https://http.cat/207`);
        break;
      case `300`:
        interaction.reply(`https://http.cat/300`);
        break;
      case `301`:
        interaction.reply(`https://http.cat/301`);
        break;
      case `302`:
        interaction.reply(`https://http.cat/302`);
        break;
      case `303`:
        interaction.reply(`https://http.cat/303`);
        break;
      case `304`:
        interaction.reply(`https://http.cat/304`);
        break;
      case `305`:
        interaction.reply(`https://http.cat/305`);
        break;
      case `307`:
        interaction.reply(`https://http.cat/307`);
        break;
      case `308`:
        interaction.reply(`https://http.cat/308`);
        break;
      case `400`:
        interaction.reply(`https://http.cat/400`);
        break;
      case `401`:
        interaction.reply(`https://http.cat/401`);
        break;
      case `402`:
        interaction.reply(`https://http.cat/402`);
        break;
      case `403`:
        interaction.reply(`https://http.cat/403`);
        break;
      case `404`:
        interaction.reply(`https://http.cat/404`);
        break;
      case `405`:
        interaction.reply(`https://http.cat/405`);
        break;
      case `406`:
        interaction.reply(`https://http.cat/406`);
        break;
      case `407`:
        interaction.reply(`https://http.cat/407`);
        break;
      case `408`:
        interaction.reply(`https://http.cat/408`);
        break;
      case `409`:
        interaction.reply(`https://http.cat/409`);
        break;
      case `410`:
        interaction.reply(`https://http.cat/410`);
        break;
      case `411`:
        interaction.reply(`https://http.cat/411`);
        break;
      case `412`:
        interaction.reply(`https://http.cat/412`);
        break;
      case `413`:
        interaction.reply(`https://http.cat/413`);
        break;
      case `414`:
        interaction.reply(`https://http.cat/414`);
        break;
      case `415`:
        interaction.reply(`https://http.cat/415`);
        break;
      case `416`:
        interaction.reply(`https://http.cat/416`);
        break;
      case `417`:
        interaction.reply(`https://http.cat/417`);
        break;
      case `418`:
        interaction.reply(`https://http.cat/418`);
        break;
      case `420`:
        interaction.reply(`https://http.cat/420`);
        break;
      case `421`:
        interaction.reply(`https://http.cat/421`);
        break;
      case `422`:
        interaction.reply(`https://http.cat/422`);
        break;
      case `423`:
        interaction.reply(`https://http.cat/423`);
        break;
      case `424`:
        interaction.reply(`https://http.cat/424`);
        break;
      case `425`:
        interaction.reply(`https://http.cat/425`);
        break;
      case `426`:
        interaction.reply(`https://http.cat/426`);
        break;
      case `429`:
        interaction.reply(`https://http.cat/429`);
        break;
      case `431`:
        interaction.reply(`https://http,cat/431`);
        break;
      case `444`:
        interaction.reply(`https://http.cat/444`);
        break;
      case `450`:
        interaction.reply(`https://http.cat/450`);
        break;
      case `451`:
        interaction.reply(`https://http.cat/451`);
        break;
      case `497`:
        interaction.reply(`https://http.cat/497`);
        break;
      case `498`:
        interaction.reply(`https://http.cat/498`);
        break;
      case `499`:
        interaction.reply(`https://http.cat/499`);
        break;
      case `500`:
        interaction.reply(`https://http.cat/500`);
        break;
      case `501`:
        interaction.reply(`https://http.cat/501`);
        break;
      case `502`:
        interaction.reply(`https://http.cat/502`);
        break;
      case `503`:
        interaction.reply(`https://http.cat/503`);
        break;
      case `504`:
        interaction.reply(`https://http.cat/504`);
        break;
      case `506`:
        interaction.reply(`https://http.cat/506`);
        break;
      case `507`:
        interaction.reply(`https://http.cat/507`);
        break;
      case `508`:
        interaction.reply(`https://http.cat/508`);
        break;
      case `509`:
        interaction.reply(`https://http.cat/509`);
        break;
      case `510`:
        interaction.reply(`https://http.cat/510`);
        break;
      case `511`:
        interaction.reply(`https://http.cat/511`);
        break;
      case `521`:
        interaction.reply(`https://http.cat/521`);
        break;
      case `523`:
        interaction.reply(`https://http.cat/523`);
        break;
      case `525`:
        interaction.reply(`https://http.cat/525`);
        break;
      case `599`:
        interaction.reply(`https://http.cat/599`);
        break;
      default:
        if (value == null) return interaction.reply(`no input`);
        return interaction.reply(`https://http.cat/404`);
    }
  },
};
