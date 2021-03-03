//РАСЧЁТ ПАРАМЕТРОВ
oddFunc = function(arr, level){
    if( !arr )
        return 0;
    var res = arr[1] + arr[2] * Math.pow(level, arr[3]);
    if (level == 1) res += arr[0];
    return res;
}

// стоимость постройки в ресурсах для конкретного уровня
module.exports.getCostLevel = function(level, cost) {
    var result = [];
	for (var res in cost[0]) {
		// if (typeof cost[res] == 'undefined') cost[res] = 0;
		result[res] = parseInt(oddFunc([cost[0][res], cost[1][res], cost[2][res], cost[3]], level), 10);
	}
	return result;
};
