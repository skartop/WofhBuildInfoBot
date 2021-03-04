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
        en: "TLDR: Try to write this:\n"
        + "> `!bi hut 11`\n"
        + "> `!bi hut 11 15`\n"
        + "> `!bi rebuild hut 11`\n"
        + "Start command with `!bi` or just mention me inside the message via `@BuildInfoBot`\n"
        + "Full names of buildings and in-game tag supported.\n"
        + ":flag_ru: Russian language supported as well. `!bi помощь` for more details\n"
        + "Available commands:\n"
        + " build - shows building cost from scratch to specified level.\n"
        + " It's the default command when only one level provided.\n"
        + " Examples:\n"
        + "> `!bi build hut 11`\n"
        + "> `!bi hut 11`\n"
        + "> `[b17] 11 @BuildInfoBot`\n"
        + " upgrade - shows upgrade cost between two specified levels\n"
        + " It's default command when two levels provided.\n"
        + " If only one level specified them it's plus one level upgrade\n"
        + " Examples:\n"
        + "> `!bi upgrade hut 11 15`\n"
        + "> `!bi hut 11 15`,\n"
        + "> `[b17] 11 15 @BuildInfoBot`\n" 
        + " rebuild - shows rebuilding cost from specified level to next tier\n"
        + " Examples:\n"
        + "> `!bi rebuild hut 11`\n"
        + "Add `time!` at any place of command to calculate building time.\n"
        + "Add `non-stop!` at any place of command to calculate streams for non-stop building.",
        ru: "Кому лень вникать - попробуйте напиши в чате:\n"
        + "> `землянка 11`\n"
        + "> `землянка 11 13`\n"
        + "> `порестроить землянка 11`\n"
        + "Команды можно начинать с `!bi` или просто упомяни меня в сообщении `@BuildInfoBot`\n"
        + "Работают полные именна строений и игровые теги с игры\n"
        + "Доступные комманды:\n"
        + "построить - посчитать стоимость стройки с нуля до заданого уровня\n"
        + "Эта команда по умолчанию если задано одно значение уровня\n"
        + "Примеры:\n"
        + "> `!bi постоить хижина 11`\n"
        + "> `!bi хижина 11`\n"
        + "> `[b85] 11 @BuildInfoBot`\n"
        + " улучшить - посчитать улучшение строения между двумя уровнями\n"
        + " Эта команда по умолчанию если задано два значение уровня\n"
        + " Если задан только один уровень, тогда считаться улучшение на 1 уровень\n"
        + " Примеры:\n"
        + "> `!bi улучшить хижина 11 15`\n"
        + "> `!bi хижина 11 15`\n"
        + "> `[b85] 11 15 @BuildInfoBot`\n"
        + " перестроить - посчитать цену перестройки с указаного уровня\n"
        + " Пример:\n"
        + "> `!bi перестроить хижина 11`\n"
        + "Добавьте `время!` к команде что б посчитать время строительства\n"
        + "Добавьте `нонстоп!` к команде что б посчитать потоки для постоянной стройки"
    },
    "no building selected" : {
        en: "Can't understand what building selected.",
        ru: "Не могу понять о каком строение речь"
    },
    "level didn't specified" : {
        en: "Can't understand level",
        ru: "Не могу понять уровень"
    },
    "too much levels" : {
        en: "Too many levels specified",
        ru: "Указано слишком много уровней"
    },
    "can't upgrade lvl 20" : {
        en: "Can't upgrade bulding level 20",
        ru: "Нельзя улучшить строение 20го уровня"
    },
    "Can't rebuild such building" : {
        en: "Can't rebuild this building",
        ru: "Нельзя перестроить это строение"
    },
    "Time": {
        en: "Time:",
        ru: "Время:"
    },
    "per hour": {
        en: "per hour",
        ru: "в час"
    }
}