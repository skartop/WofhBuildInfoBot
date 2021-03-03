// This code must be run in browser to gather game info

//Run with EN language
function BuildBuildInfo(a) {
    // Execute on site with english locale
    for (var i = 0; i < 120; i++) {
        a[i] = {};
        a[i].cost = this[0].lib.builds[i].cost;
        a[i].buildtime = this[0].lib.builds[i].buildtime;
        a[i].name = { en:"", ru:"" };
        a[i].name.en = this[0].Build.lib[i].name;
        a[i].id = i;
        a[i].next = this[0].lib.builds[i].next;
    }

    a[27].name.en = "Hunter's house";
    a[99].name.en = "Sun Tzu's War Academy";
}

//Run in RU language after BuildBuildInfo
function BuildInfoAppendRuInfo(a) {
    if (this[0].Build.lib[0].name != "Алтарь") {
        console.log("Switch to ru language!");
        return;
    }
    if (!(a[i] || a[i].name || a[i].name.ru || a[i].name.ru == "Shrine")) {
        console.log("run BuildBuildInfo() before this!");
        return;
    }
    
    // Execute on site after BuildBuildInfo with ru locale
    for (var i = 0; i < 120; i++) {
        a[i].name.ru = this[0].Build.lib[i].name;
    }
}