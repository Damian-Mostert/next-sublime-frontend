module.exports = {
  plugins: ["tailwindcss", "autoprefixer"],
};

if (process.env.SERVER_TYPE == "Development") {
  require("./development");
}
