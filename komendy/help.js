/* eslint-disable linebreak-style */
const { SlashCommandBuilder } = require("@discordjs/builders");
var fetchUrl = require("fetch").fetchUrl;
const { port } = require(`../webconfig.json`);
module.exports = {
  data: new SlashCommandBuilder()
    .setName(`help`)
    .setDescription(`Helps you with commands`)
    .addStringOption((option) =>
      option.setName("input").setDescription("the command")
    ),
  async execute(interaction) {
    const start = Date.now();
    const value = interaction.options.getString("input");
    switch (value) {
      case `help`:
        interaction.reply(
          "help command\nusage: /help <command>\nex. use: /help help (you are seeing this now)\nrequired permissions: `-`\nDescription: helps you™️"
        );
        break;
      case `eval`:
        interaction.reply(
          "eval command\nusage: /eval <javascript_expression>\nex. use: /eval interaction.client.ws.ping (returns bot ping)\nrequired permissions: `Developer`\nDescription: Evaluates javascript expression"
        );
        break;
      case undefined:
        interaction.reply("An error occurred while searching.");
      case `httpcat`:
        interaction.reply(
          `\`httpcat\` command\nusage: /httpcat <http_status_code>\ndescription: httpcat error\nex. use: /httpcat number:404\nrequired permissions: \`-\``
        );
        break;
      case `dog`:
        interaction.reply(
          `\`dog\` command\n usage: /dog\nex. use: /dog\ndescription: random dog\n required permissions: \`-\``
        );
        break;
      case `cat`:
        interaction.reply(
          `\`cat\` command\nusage: /cat\ndescription: Random cat\nex. use: /cat\nrequired permissions: \`-\``
        );
        break;
      case `coupon`:
        interaction.reply(
          `\`coupon\` command\nusage: /coupon\ndescription: it doesn't do anything, just for the fun\nrequired permissions: \`-\``
        );
        break;
      case `drake`:
        interaction.reply(
          `\`drake\` command\nusage: /drake input1:test1 input2:test2\ndescription: generates an random drake meme\nrequired permissions: \`-\``
        );
        break;
      case `fox`:
        interaction.reply(
          `\`fox\` command\nusage: /fox\ndescription: random fox\n usage: /fox\nrequired permissions:\`-\``
        );
        break;
      case `ping`:
        interaction.reply(
          `\`ping\` command\nusage: /ping\ndescription: returns gateway latency\nusage: /ping\nrequired permissions:\`-\``
        );
        break;
      case `rickroll`:
        interaction.reply(
          `\`rickroll\`\ndescription: gets you trolled\nusage: /rickroll\nrequired permissions:\`-\``
        );
        break;
      case `say`:
        interaction.reply(
          `\`say\` command\ndescription: says something as you\nusage: /say\nex. use: /say input: test\nrequired permissions:\`-\``
        );
        break;
      case `triggered`:
        interaction.reply(
          `\`triggered\` command\ndescription: makes you triggered, or someone else you selected...\nusage: /triggered\nex. use: /triggered target:@pass the burrito down#4261\nrequired permissions:\`-\``
        );
        break;
      case null:
        interaction.reply("Come on man, give me the command name okay?");
      default:
        interaction.reply(`Command not documented, you might be lost...`);
        break;
    }
  },
};
