const config = require("../config.json");
const messageHandler = require("./messageHandler.js")
const discord = require("discord.js");
const client = new discord.Client();

function isNeedToReply(message) {
    if (message.author.bot)
        return false;
    if (message.content.includes("@here") || message.content.includes("@everyone"))
        return false;

    if (message.content.startsWith("!bi"))
        return true;
    if (message.mentions.has(client.user.id))
        return true;
    return false;
}

client.on("message", function(message) {
    if (!isNeedToReply(message))
        return false;

    const reply = messageHandler(message.content);
    if (reply)
        message.reply(reply + " ");
});

client.login(config.BOT_TOKEN);