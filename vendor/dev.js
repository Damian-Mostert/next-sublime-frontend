//create global stylesheet;
const fs = require("fs");

function main() {
  console.info("\u001b[92mUpdating config...\u001b[0m");
  loadCssAndSassVariables();
  updateServices();
  console.info("\u001b[92mConfig updated\u001b[0m");
}

const loadCssAndSassVariables = () => {
  console.info("\u001b[36mUpdating styles config...\u001b[0m");
  const screen = require("../src/lib/styles/screens.json");
  const color = require("../src/lib/styles/colors.json");
  const size = require("../src/lib/styles/sizes.json");
  const font = require("../src/lib/styles/fonts.json");
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
  console.info("\u001b[31mINPUT\u001b[0m", variables);
  console.info("\u001b[33mSee output at:\u001b[0m");
  console.info(__dirname + "/vendor/styles/variables.output.css");
  console.info(__dirname + "/vendor/styles/variables.output.sass");
};

const updateServices = () => {
  const files = fs.readdirSync(
    __dirname.substring(0, __dirname.lastIndexOf("/")) + "/src/lib/services"
  );
  console.info("\u001b[36mUpdating services...\u001b[0m");
  console.info("files", files);
  let script = "";
  let exports = "export default {\n";
  for(let filename of files){
      script +=
        "import " +
        filename.replace(".js", "").replace(".json", "") +
        ' from "../../src/lib/services/' +
        filename +
        '";\n';
      exports += "\t" + filename.replace(".js", "").replace(".json", "") + ",\n";
  }
  exports += "}\n";
  fs.writeFileSync(__dirname + "/services/__load.js", script + exports);
  console.info("\u001b[33mSee output at:\u001b[0m");
  console.info(__dirname + "/vendor/services/__load.js");
};

main();
