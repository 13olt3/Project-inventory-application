const dbQuery = require("../db/queries");

async function indexPage(req, res) {
  const carBrands = await dbQuery.getCarBrands();
  res.render("index", { title: "Index Page", carBrands: carBrands });
}

module.exports = { indexPage };
