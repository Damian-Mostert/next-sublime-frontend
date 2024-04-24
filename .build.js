const fs = require("fs");

function main() {
    console.info("\u001b[92mUpdating config...\u001b[0m");
    loadCssAndSassVariables();
    updateServices();
    updateComponents();
    updatePopups();
    console.info("\u001b[92mConfig updated\u001b[0m");
}

const loadCssAndSassVariables = () => {
    const screen = require("./application/styles/screens.json");
    const color = require("./application/styles/colors.json");
    const size = require("./application/styles/sizes.json");
    const font = require("./application/styles/fonts.json");
    const variables = { screen, color, size, font };
    let output = `
    `;
    let root = `:root{\n`;
    let utilities = "";

    Object.keys(variables).forEach((mainKey) => {
        output += "//" + mainKey + "\n";
        root += "\t/*" + mainKey + "*/\n";
        if (mainKey != "screen" && mainKey != "size")
            utilities += "\t//" + mainKey + "\n";

        for (const key in variables[mainKey]) {
            if (typeof variables[mainKey][key] == "string") {
                output += `$${mainKey}-${key}: ${variables[mainKey][key]};\n`;
                root += `\t--${mainKey}-${key} : ${variables[mainKey][key]};\n`;
            }
        }
    });
    output += "\n";

    fs.writeFileSync(
        __dirname + "/src/lib/styles/variables.output.scss",
        output
    );
    fs.writeFileSync(
        __dirname + "/src/lib/styles/variables.output.css",
        root + "}\n"
    );
    //do fonts
    const files = fs
        .readdirSync(__dirname + "/application/styles/fonts")
        .filter((i) => i != "README.md");
    let main = {};
    files.map((filename) => {
        if (filename != "fonts.css") {
            const fonts = fs.readdirSync(
                __dirname + "/application/styles/fonts/" + filename
            );
            const Loaded = {};
            fonts.map((fontFilename) => {
                Loaded[
                    fontFilename.substr(0, fontFilename.lastIndexOf("."))
                ] = {
                    file: filename + "/" + fontFilename,
                };
            });
            main[filename] = Loaded;
        }
    });
    let string =
        "/*this file auto-builds, do not edit, instead just add a font*/";
    for (let fontName in main) {
        string += "\n/*" + fontName + "*/";
        for (let typeName in main[fontName]) {
            string += `
@font-face{
  font-family: "${fontName + "-" + typeName}";
  src: url("../../../application/styles/fonts/${main[fontName][typeName].file}");
}`;
        }
        string += "\n";
    }
    fs.writeFileSync(__dirname + "/src/lib/styles/fonts.css", string);
};

const updateServices = () => {
    const files = fs
        .readdirSync(__dirname + "/application/services")
        .filter((n) => n != "README.md");

    let script = 'import auth from "./auth";\nimport page from "./page";\n';
    let exports = "export default {\n\tauth,\n\tpage,\n";
    for (let filename of files) {
        script +=
            "import " +
            filename.replace(".jsx", "").replace(".js", "") +
            ' from "@application/services/' +
            filename +
            '";\n';
        exports +=
            "\t" + filename.replace(".js", "").replace(".json", "") + ",\n";
    }
    exports += "}\n";
    fs.writeFileSync(
        __dirname + "/src/lib/services/__load.js",
        script + exports
    );
};

const updatePopups = () => {
    const files = fs
        .readdirSync(__dirname + "/application/popups")
        .filter((n) => n != "README.md");

    let script = "";
    let exports = "export default {";
    for (let filename of files) {
        script +=
            "import " +
            filename.replace(".jsx", "").replace(".jsx", "") +
            ' from "@application/popups/' +
            filename +
            '";\n';
        exports +=
            "\t" + filename.replace(".jsx", "").replace(".js", "") + ",\n";
    }
    exports += "}\n";
    fs.writeFileSync(__dirname + "/src/load/popups.js", script + exports);
};

const updateComponents = () => {
    const files = fs
        .readdirSync(__dirname + "/application/components")
        .filter((n) => n != "README.md");

    let script = "";
    let exports = "export default {\n\t";
    for (let filename of files) {
        script +=
            "import " +
            filename.replace(".jsx", "").replace(".js", "") +
            `,{\n\ttitle as ${filename
                .replace(".jsx", "")
                .replace(".js", "")}_title,\n\tprops as ${filename
                .replace(".jsx", "")
                .replace(".js", "")}_props\n} from "@application/components/` +
            filename +
            '";\n' +
            `${filename
                .replace(".jsx", "")
                .replace(".js", "")}.title = ${filename
                .replace(".jsx", "")
                .replace(".js", "")}_title
${filename.replace(".jsx", "").replace(".js", "")}.props = ${filename
                .replace(".jsx", "")
                .replace(".js", "")}_props;\n`;
        exports +=
            "\t" + filename.replace(".jsx", "").replace(".js", "") + ",\n";
    }
    exports += "}\n";
    fs.writeFileSync(__dirname + "/src/load/components.js", script + exports);
};

main();
