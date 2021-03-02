const buildingData = require("./BuildingData.json");
const inputCommands = require("./language/input.js");

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
    .filter(l => (l > 0 && l < 21)) || [])
    .sort((a, b) => a - b)
    .map(parseFloat);
}

function parseCommand(text) {
    let r = Object.values(inputCommands).filter(command =>
        command.find(w => text.includes(w))
    );
    if (r.length == 0)
        return undefined;
    return r[0][0];
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