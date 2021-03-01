module.exports = {
    "build cost" : {
        en: "Building cost of %s level %s from scratch:\n",
        ru: "Стоимость постройки %s уровень %s с нуля:\n"
    },
    "upgrade cost" : {
        en: "Upgrading cost of %s from level %s to %s:\n",
        ru: "Стоимость улучшения %s с уровня %s до %s:\n"
    },
    "rebuild cost" : {
        en: "Rebuild cost of %s level %s into %s:\n",
        ru: "Перестройка %s с уровня %s в %s:\n"
    },
    "General help" : {
        en: "TLDR: Mention me with message like this `hut 11`, `hut 11 15`, or `rebuild hut 11`\n"
        + "Start command with `!bi` or just mention me inside the message.\n"
        + "Full names of buildings and in-game tag supported.\n"
        + ":flag_ru: Russian language supported as well. `!bi помощь` for more details\n"
        + "Available commands:\n"
        + " build - shows building cost from scratch to specified level.\n"
        + "    build is the default command when only one level provided.\n"
        + "    Examples: `!bi build hut 11`, `!bi hut 11`"
        + "      `[b17] 11 @BuildInfoBot`, `build [b17] 11 @BuildInfoBot`\n\n"
        + " upgrade - shows upgrade cost between two specified levels\n"
        + "    upgrade is default command when only one level provided.\n"
        + "    if only one level specified them it is one level upgrade\n"
        + "    Examples: `!bi upgrade hut 11 15`, `!bi hut 11 15`,\n"
        + "      `[b17] 11 15 @BuildInfoBot` `upgrade hut 11 @BuildInfoBot`\n\n" 
        + " rebuild - shows rebuilding cost from specified level to next tier\n"
        + "    Examples: `!bi rebuild hut 11`\n\n",
        ru: "TLDR: Напиши мне `землянка 11`, `землянка 11 13` или `порестроить землянка 11`\n"
        + "Команды можно начинать с `!bi` или просто упомяни меня в сообщении\n"
        + "Работают полные именна строений и игровые теги с игры\n"
        + "Доступніе комманды:\n"
        + " построить - посчитать стоимость стройки с нуля до заданого уровня\n"
        + "    Эта команда по умолчанию если задано одно значение уровня\n"
        + "    Примеры: `!bi постоить хижина 11`, `!bi хижина 11`\n"
        + "      `[b85] 11 @BuildInfoBot`, `построить [b85] 11 @BuildInfoBot`\n\n"
        + " улучшить - посчитать улучшение строения между двумя уровнями\n"
        + "    Эта команда по умолчанию если задано два значение уровня\n"
        + "    Если задан только один уровень, тогда считаться улучшение на 1 уровень\n"
        + "    Примеры: `!bi улучшить хижина 11 15`, `!bi хижина 11 15`\n"
        + "      `[b85] 11 15 @BuildInfoBot` `улучшить хижина 11 15 @BuildInfoBot`\n\n"
        + " перестроить - посчитать цену перестройки с указаного уровня\n"
        + "    Пример: `!bi перестроить хижина 11`\n\n"
    },
    "no building selected" : {
        en: "Can't understand what building selected.",
        ru: "Не могу понять о каком строение речь"
    },
    "level didn't specified" : {
        en: "Can't understand level",
        ru: "не могу понять уровень"
    },
    "too much levels" : {
        en: "Too many level specified",
        ru: "задано слишком много уровней"
    },
    "can't upgrade lvl 20" : {
        en: "Can't upgrade bulding level 20",
        ru: "Нельзя улучшить строение 20го уровня"
    },
    "Can't rebuild such building" : {
        en: "Can't rebuild this building",
        ru: "Нельзя перестроить это строение"
    }
}