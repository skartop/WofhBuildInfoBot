const parser = require("./parser.js");
const handle = require("./handler.js");
const postParser = require("./postParsed.js");
const buildReply = require("./replyBuilder.js");

const debug = true;
module.exports = function(message) {
    if (debug) console.log("message: " + message);
    const rawParsed = parser(message);
    if (debug) console.log("rawParsed: " + JSON.stringify(rawParsed));
    const parsed = postParser(rawParsed);
    if (debug) console.log("parsed: " + JSON.stringify(parsed));
    const calculated = handle[parsed.command](parsed);
    const reply = buildReply[parsed.command](calculated);
    return reply;
}