util = require('util');
_T_ = require("./language/output.js");
const Resources = require("./Resources.js");

module.exports = {
    build: function(data) {
        return util.format(_T_["build cost"][data.language],
                data.building.name[data.language],
                data.levels[0])
            + CostToString(data)
            + TimeToString(data);
    },
    upgrade: function(data) {
        return util.format(_T_["upgrade cost"][data.language],
                data.building.name[data.language],
                data.levels[0],
                data.levels[1])
            + CostToString(data)
            + TimeToString(data);
    },
    help: function(data) {
        if (!data.tip) {
            return _T_["General help"][data.language];
        }
        return _T_[data.tip][data.language];
    },
    rebuild: function(data) {
        return util.format(_T_["rebuild cost"][data.language],
                data.building.name[data.language],
                data.levels[0],
                data.target.name[data.language])
            + CostToString(data)
            + TimeToString(data);
    },
    ignore: function(data) {
        return undefined;
    }
};

function Separation(number, sepparator) {
    if (!sepparator || sepparator == "")
        return number;

    number = number.toString();
    if (number.length < 3)
        return number;

    let result = "";
    let some = number.length % 3;
    if (some == 0)
        some = 3;
    result += number.slice(0, some);
    number = number.slice(some);
    while (number.length > 0) {
        result += sepparator + number.slice(0, 3);
        number = number.slice(3);
    }
    return result;
}

function CostToString(data) {
    const cost = data.cost;
    const language = data.language;
    const nonstopHours = data.nonstopTime / 60 / 60;
    if (nonstopHours < 0.000001)
        data.isNonStop = false;

    let reply = "";
    for (let i = 0; i < Resources.length; i++) {
        if (cost[i] > 0) {
            reply += "  " + Resources[i][language] + ": " + Separation(cost[i], data.isSeparator ? " " : "");
            if (data.isNonStop)
                reply += "  (" + Separation(Math.round(cost[i] / nonstopHours), data.isSeparator ? " " : "")  + " " + _T_["per hour"][language] + ")";
            reply += "\n";
        }
    }
    return reply;
}

function TimeToString(data) {
    if (!data.isTime)
        return "";
    const hours = Math.trunc(data.time / 60 / 60);
    let minutes = Math.trunc(data.time / 60 % 60);
    if (minutes < 10) minutes = "0" + minutes;
    let seconds = Math.trunc(data.time % 60 % 60);
    if (seconds < 10) seconds = "0" + seconds;
    return "  " + _T_["Time"][data.language] + " " + hours + ":" + minutes + ":" + seconds + "\n";
}