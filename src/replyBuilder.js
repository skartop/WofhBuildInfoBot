util = require('util');
_T_ = require("./language/output.js");
const Resources = require("./Resources.js");

module.exports = {
    build: function(data) {
        return util.format(_T_["build cost"][data.language],
                data.building.name[data.language],
                data.levels[0])
            + CostToString(data.cost, data.language);
    },
    upgrade: function(data) {
        return util.format(_T_["upgrade cost"][data.language],
                data.building.name[data.language],
                data.levels[0],
                data.levels[1])
            + CostToString(data.cost, data.language);
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
            + CostToString(data.cost, data.language);
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