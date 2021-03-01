module.exports = function (rawParsed) {
    let parsed = rawParsed;
    if (parsed.command == "help")
        return parsed;
    if (!parsed.building) {
        parsed.command = "help";
        parsed.tip = "no building selected";
        return parsed;
    }
    if (!parsed.levels || parsed.levels.length == 0) {
        parsed.command = "help";
        parsed.tip = "level didn't specified";
        return parsed;
    } 
    if (parsed.levels.length > 2) {
        parsed.command = "help";
        parsed.tip = "too much levels";
        return parsed;
    }
    if (parsed.levels.length == 1 && parsed.command == "upgrade") {
        if (parsed.levels[0] == 20) {
            parsed.command = "help";
            parsed.tip = "can't upgrade lvl 20";
            return parsed;
        }
        parsed.levels[1] = parsed.levels[0] + 1;
        return parsed;
    }
    if (parsed.levels.length == 2) {
        parsed.command = "upgrade";
        return parsed;
    }
    if (!parsed.command && parsed.levels.length == 1) {
        parsed.command = "build";
        return parsed;
    }
    if (parsed.command == "rebuild") {
        if (parsed.building.next[0] == 400) {
            parsed.command = "help";
            parsed.tip = "Can't rebuild such building";
        }
        return parsed;
    }

    return parsed;
}