//create global stylesheet;
const fs = require("fs");

function main() {
  console.info("\u001b[92mUpdating config...\u001b[0m");
  loadCssAndSassVariables();
  updateServices();
  console.info("\u001b[92mConfig updated\u001b[0m");
}

const loadCssAndSassVariables = () => {
  const screen = require("../web/styles/screens.json");
  const color = require("../web/styles/colors.json");
  const size = require("../web/styles/sizes.json");
  const font = require("../web/styles/fonts.json");
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

  fs.writeFileSync(__dirname + "/styles/variables.output.scss", output);
  fs.writeFileSync(__dirname + "/styles/variables.output.css", root + "}\n");
  //do fonts
  const files = fs.readdirSync(
    __dirname.substring(0, __dirname.lastIndexOf("/")) + "/web/styles/fonts"
  );
  let main = {};
  files.map((filename) => {
    if (filename != "fonts.css") {
      const fonts = fs.readdirSync(
        __dirname.substring(0, __dirname.lastIndexOf("/")) +
          "/web/styles/fonts/" +
          filename
      );
      const Loaded = {};
      fonts.map((fontFilename) => {
        Loaded[fontFilename.substr(0, fontFilename.lastIndexOf("."))] = {
          file: filename + "/" + fontFilename,
        };
      });
      main[filename] = Loaded;
    }
  });
  let string = "/*this file auto-webs, do not edit, instead just add a font*/";
  for (let fontName in main) {
    string += "\n/*" + fontName + "*/";
    for (let typeName in main[fontName]) {
      string += `
@font-face{
  font-family: "${fontName + "-" + typeName}";
  src: url("./${main[fontName][typeName].file}");
}`;
    }
    string += "\n";
  }
  fs.writeFileSync(
    __dirname.substring(0, __dirname.lastIndexOf("/")) +
      "/web/styles/fonts/fonts.css",
    string
  );
};

const updateServices = () => {
  const files = fs.readdirSync(
    __dirname.substring(0, __dirname.lastIndexOf("/")) + "/web/services"
  ).filter(n=>n!="README.md");

  let script = "";
  let exports = "export default {\n";
  for (let filename of files) {
    script +=
      "import " +
      filename.replace(".js", "").replace(".json", "") +
      ' from "@web/services/' +
      filename +
      '";\n';
    exports += "\t" + filename.replace(".js", "").replace(".json", "") + ",\n";
  }
  exports += "}\n";
  fs.writeFileSync(__dirname + "/services/__load.js", script + exports);
};

main();
