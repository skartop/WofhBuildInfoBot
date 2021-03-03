util = require('util');
_T_ = require("./language/output.js");
const Resources = require("./Resources.js");

module.exports = {
    build: function(data) {
        return util.format(_T_["build cost"][data.language],
                data.building.name[data.language],
                data.levels[0])
            + CostToString(data.cost, data.language)
            + TimeToString(data);
    },
    upgrade: function(data) {
        return util.format(_T_["upgrade cost"][data.language],
                data.building.name[data.language],
                data.levels[0],
                data.levels[1])
            + CostToString(data.cost, data.language)
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
            + CostToString(data.cost, data.language)
            + TimeToString(data);
    },
    ignore: function(data) {
        return undefined;
    }
};

function CostToString(cost, language) {
    let reply = "";
    for (let i = 0; i < Resources.length; i++) {
        if (cost[i] > 0) {
            reply += "  " + Resources[i][language] + ": " + cost[i] + "\n";
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