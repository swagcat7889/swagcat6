const { ShardingManager } = require('discord.js');
const { token } = require(`./config.json`)
const manager = new ShardingManager('./non-shard.js', { token: `${token}`, shardCount: 25 });

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

manager.spawn(3);