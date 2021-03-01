const buildingData = require("./BuildingData.json");

function isInt(str) {
    return !isNaN(str) && Number.isInteger(parseFloat(str));
}

function getTextLanguage(text) {
    if (((text || '').match(/[a-z]/gi) || []).length < ((text || '').match(/[абвгдеёжзийклмнопрстуфхцчшщъыьэюя]/gi) || []).length) 
        return "ru";
    return "en";
}

function parseLevels(text) {
    return (text.replace(/[^'0-9a-zабвгдеёжзийклмнопрстуфхцчшщъыьэюя-]/gi, ' ')
    .replace(/\s+/g, ' ')
    .split(' ')
    .filter(isInt)
    .filter( l => (l > 0 && l < 21)) || [])
    .sort((a, b) => a - b)
    .map(parseFloat);
}

function parseCommand(text) {
    if (["rebuild", "перестроисть"].find(w => text.includes(w)))
        return "rebuild";
    if (["build", "построить", "строить"].find(w => text.includes(w)))
        return "build";
    if (["upgrade", "улучшить"].find(w => text.includes(w)))
        return "upgrade";
    if (["help", "помощь"].find(w => text.includes(w)))
        return "help";
    return undefined;
}

function parseBuildings(text, language) {
    const lowercased = text.toLowerCase();
    const buildings = Object.values(buildingData)
        .filter(bd => ((lowercased.includes(bd.name.en.toLowerCase())) 
            || (lowercased.includes(bd.name.ru.toLowerCase()))
            || (lowercased.includes("[b" + bd.id + "]"))));
        if (!buildings)
            return;
        return buildings.sort((a, b) => (a.name[language].length > b.name[language].length ? a : b))[0];
}

module.exports = function(message) {
    const language = getTextLanguage(message);
    return {
        command: parseCommand(message),
        levels: parseLevels(message),
        language: language,
        building: parseBuildings(message, language)
    };
}