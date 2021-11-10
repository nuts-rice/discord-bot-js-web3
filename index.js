const { Client, Intents}m = require("discord.js");
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on("ready", () => {
    console.log("Kick the tires, light the fires. I am ready")
});

client.on("messageCreate", (message) => {
    if (message.content.startsWith("ping")) {
        message.channel.send("pong!");
    }
})

client.login("BOTTOKEN!");
