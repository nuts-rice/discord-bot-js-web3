const { Client, Intents} = require("discord.js");
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const config = require("./config.json");

client.on("ready", () => {
    console.log("Kick the tires, light the fires. I am ready")
});

client.on("messageCreate", (message) => {
    if (!message.content.startsWith (config.prefix) || message.author.bot) return;
    if (message.content.startsWith('${config.prefix}ping')) {
        message.channel.send("pong!");
    } else

        if (message.content.startsWith('${confitg.prefix}minesweeper')){
            message.channel.send("Let's play minesweeper!")
        }
})

client.login(config.token);
