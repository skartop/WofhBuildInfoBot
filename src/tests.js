const messageHandler = require("./messageHandler.js")

function check() {
    if (!arguments && arguments.length < 2) {
        console.log("Need more arguments")
        return false;
    }
    const input = arguments[0];
    //console.log("input: " + input);
    const output = messageHandler(input);
    const target = Object.values(arguments)
        .slice(1)
        .reduce((result, line) => result = result + line + "\n", "")
    if (target == output)
        return true;
    console.log("For input: " + input);
    console.log("bot response is:\n" + output);
    console.log("but desired response is:\n" + target);
    console.log("They are not the same!!");
    return false;
}

const tests = [
    {
        name: "simple",
        test: function () {
            return check("hut 1",
                "Building cost of Hut level 1 from scratch:",
                "  Food: 30",
                "  Wood: 55");
        },
    },
    {
        name: "from scratch",
        test: function () {
            return check("hut 5",
                "Building cost of Hut level 5 from scratch:",
                "  Food: 222",
                "  Wood: 420");
        },
    },
    {
        name: "with two levels",
        test: function () {
            return check("hut 3 5",
                "Upgrading cost of Hut from level 3 to 5:",
                "  Food: 116",
                "  Wood: 222");
        },
    },
    {
        name: "single level upgrade",
        test: function () {
            return check("upgrade hut 3",
                "Upgrading cost of Hut from level 3 to 4:",
                "  Food: 52",
                "  Wood: 99");
        },
    },
    {
        name: "few levels upgrade",
        test: function () {
            return check("upgrade hut 3 5",
                "Upgrading cost of Hut from level 3 to 5:",
                "  Food: 116",
                "  Wood: 222");
        },
    },
    {
        name: "rebuild",
        test: function () {
            return check("rebuild hut 3",
                "Rebuild cost of Hut level 3 into Depot:",
                "  Food: 1263",
                "  Wood: 2921",
                "  Metal: 120");
        },
    },
    {
        name: "tags usage",
        test: function () {
            return check("[b2] 5",
                "Building cost of Hut level 5 from scratch:",
                "  Food: 222",
                "  Wood: 420");
        },
    },
    {
        name: "trash words filter out",
        test: function () {
            return check("[b2] blah 5 blah blah",
                "Building cost of Hut level 5 from scratch:",
                "  Food: 222",
                "  Wood: 420");
        },
    },
    {
        name: "name with capital letters",
        test: function () {
            return check("HuT 5",
                "Building cost of Hut level 5 from scratch:",
                "  Food: 222",
                "  Wood: 420");
        },
    }

]

function run() {
    for (let i = 0; i < tests.length; i++) {
        const t = tests[i];
        if (t.test()) {
            console.log("OK - " + t.name);
        } else {
            console.log("!! - " + t.name);
            return;
        }
    }
}


run();
console.log("end");