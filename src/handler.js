const buildingData = require("./export/BuildingData.json");
const Resources = require("./Resources.js");
const Exported = require("./export/exportedFunctions.js");
const Prices = require("./priceStub.js");

module.exports = {
    build: (data) => {
        data.cost = CalculateCost(data.building, 1, data.levels[0]);
        data.time = CalculateTime(data.building, 1, data.levels[0]);
        if (data.levels[0] > 2)
            data.nonstopTime = CalculateTime(data.building, 1, data.levels[0] - 1);
        data.price = CalculatePrice(data.cost);
        return data;
    },
    upgrade: (data) => {
        data.cost = CalculateCost(data.building, data.levels[0] + 1, data.levels[1]);
        data.time = CalculateTime(data.building, data.levels[0] + 1, data.levels[1]);
        if (data.levels[1] - data.levels[0] > 2)
            data.nonstopTime = CalculateTime(data.building, data.levels[0] + 1, data.levels[1] - 1);
        data.price = CalculatePrice(data.cost);
        return data;
    },
    help: (data) => data,
    rebuild: (data) => {
        let current = data.building;
        let cost = CalculateCost(current, 1, data.levels[0]);
        data.target = buildingData[current.next[0]]
        data.cost = CalculateCost(data.target, 1, 1);
        data.time = CalculateTime(data.target, 1, 1);

        for (let i = 0; i < Resources.length; i++) {
            data.cost[i] = Math.round(data.cost[i] - cost[i] * 0.35);
            data.cost[i] = Math.max(data.cost[i], 0);
        }
        data.price = CalculatePrice(data.cost);
        return data;
    },
    ignore: (data) => data
};

function CalculatePrice(cost) {
    let result = 0;
    for (i = 0; i < cost.length; i++) {
        if (cost[i] != 0) {
            const price = Prices[Resources[i].en];
            result += price * cost[i];
        }
    }
    return result;
}

function CalculateCost(target, startLvl, finishLvl) {
    //console.log(arguments);
    let cost = [];
    for (let i = 0; i < Resources.length; i++)
        cost.push(0);
    
    for (let level = startLvl; level <= finishLvl; level++) {
        const costLvl = Exported.getCostLevel(level, target.cost);
        for (let i = 0; i < Resources.length; i++)
            cost[i] += (costLvl[i] > 0 ? costLvl[i] : 0);
    }
    cost = cost.map(c => Math.max(c, 0));
    return cost;
}

function CalculateTime(target, startLvl, finishLvl) {
    //console.log(arguments);
    let time = 0;
    for (let level = startLvl; level <= finishLvl; level++)
        time += Math.round(Exported.getTime(level, target.buildtime));
    return time;
}

