const buildingData = require("./BuildingData.json");
const Resources = require("./Resources.js");

module.exports = {
    build: (data) => {
        data.cost = CalculateCost(data.building, 1, data.levels[0]);
        return data;
    },
    upgrade: (data) => {
        data.cost = CalculateCost(data.building, data.levels[0] + 1, data.levels[1]);
        return data;
    },
    help: (data) => data,
    rebuild: (data) => {
        let current = data.building;
        let cost = CalculateCost(current, 1, data.levels[0]);
        data.target = buildingData[current.next[0]]
        data.cost = CalculateCost(data.target, 1, 1);

        for (let i = 0; i < Resources.length; i++) {
            data.cost[i] = Math.round(data.cost[i] - cost[i] * 0.35);
            data.cost[i] = Math.max(data.cost[i], 0);
        }
        return data;
    },
    ignore: (data) => data
};



//РАСЧЁТ ПАРАМЕТРОВ
oddFunc = function(arr, level){
    if( !arr )
        return 0;
    var res = arr[1] + arr[2] * Math.pow(level, arr[3]);
    if (level == 1) res += arr[0];
    return res;
}

// стоимость постройки в ресурсах для конкретного уровня
getCostLevel = function(level, cost) {
    var result = [];
	for (var res in cost[0]) {
		// if (typeof cost[res] == 'undefined') cost[res] = 0;
		result[res] = parseInt(oddFunc([cost[0][res], cost[1][res], cost[2][res], cost[3]], level), 10);
	}
	return result;
};

function CalculateCost(target, startLvl, finishLvl) {
    //console.log(arguments);
    let cost = [];
    for (let i = 0; i < Resources.length; i++)
        cost.push(0);
    
    for (let level = startLvl; level <= finishLvl; level++) {
        const costLvl = getCostLevel(level, target.cost);
        for (let i = 0; i < Resources.length; i++)
            cost[i] += (costLvl[i] > 0 ? costLvl[i] : 0);
    }
    cost = cost.map(c => Math.max(c, 0));
    return cost;
}



