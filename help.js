/* eslint-disable linebreak-style */
const {MessageActionRow, MessageButton} = require('discord.js');
const {SlashCommandBuilder} = require('@discordjs/builders');
const uuid = require('uuid');
module.exports = {
  data: new SlashCommandBuilder()
      .setName(`help`)
      .setDescription(`Syf do pomocy, poleca Magda Gessler`),
  async execute(interaction) {
    const uuuid = uuid.v4();
    async function button(id) {
      interaction.client.once('interactionCreate', (interaction) => {
        if (!interaction.isButton()) return;
        if (interaction.customId == id) return;
        console.log(interaction);
        interaction.reply({content: `Swagcatlike\n/kupon - Kupon na swagcata!\n/rickroll - Never gonna give you up~\n/eval <kod> - uruchom kod! (tylko dla developerów bota)\n/help - Try it and see™️\n/ping - ${interaction.client.ws.ping}ms pingu!\n/kot - kiteł :)`, ephemeral: true});
        const logi = interaction.client.channels.cache.get(`894956743799484427`);
        logi.send(`${interaction.user.tag}`);
      });
    }
    const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId(uuuid)
                .setLabel('Kliknij tutaj po listę komend')
                .setStyle('PRIMARY')
                .setEmoji(`894153592741699585`),
        );
    const disabledRow = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('dhelp')
                .setLabel('Ta komenda wygasła!')
                .setStyle('PRIMARY')
                .setEmoji(`895355614367207526`)
                .setDisabled(true),
        );
    button(uuuid);
    const filter = (i) => i.customId === 'primary';

    const collector = interaction.channel.createMessageComponentCollector({filter, time: 1000});

    collector.on('collect', async (i) => {
      if (i.customId === 'primary') {
        await interaction.editReply({content: 'y', components: [disabledRow]});
      }
    });

    collector.on('end', (collected) => interaction.editReply({content: 'y', components: [disabledRow]}));
    await interaction.reply({content: 'Ok! Kliknij w guziol!', components: [row]});
  },
};
