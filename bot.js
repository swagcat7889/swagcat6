if (require("discord.js").version < "13.0.0")
  throw new Error(
    "o kurwa jakim trzeba być debilem, aby odpalić tego bota w wersji starszej niż v13?"
  );
if (require("discord.js").version > "14.0.0")
  throw new Error("Czekaj co? To już v14 released?");
const fs = require("fs"),
  {
    Client: Client,
    Collection: Collection,
    Intents: Intents,
  } = require("discord.js"),
  { token: token } = require("./config.json"),
  wait = require("util").promisify(setTimeout),
  client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    ws: { properties: { $browser: "Discord iOS" } },
  });
client.commands = new Collection();
const commandFiles = fs
  .readdirSync("./komendy")
  .filter((e) => e.endsWith(".js"));
for (const e of commandFiles) {
  const o = require(`./komendy/${e}`);
  console.log(`ok: ${e}`), client.commands.set(o.data.name, o);
}
client.once("ready", async (e) => {
  console.log("Gotowe!"), await wait(250);
  const { version: o } = require("./package.json");
  e.user.setActivity(`SwagCat ${o}`, { type: "PLAYING" });
}),
  client.on("interactionCreate", async (e) => {
    if (!e.isCommand()) return;
    if (0x8f8ec6305420000 == e.user.id) return;
    const o = client.commands.get(e.commandName);
    try {
      await o.execute(e, o);
    } catch (o) {
      return (
        console.error(o),
        e.reply({ content: "swag coś rozjebał :neutral_face:", ephemeral: !0 })
      );
    }
  }),
  client.login(token),
  client.on("shardError", (e) => {
    console.error("błąd sharda:", e);
  }),
  process.on("unhandledRejection", (e) => {
    console.error("błąd node.js (unhandled rejection):", e);
  }),
  client.on("error", (e) => {
    console.error("error (zwykły error): ", e);
  });
