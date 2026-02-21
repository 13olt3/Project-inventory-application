const dbQuery = require("../db/queries");
const links = [
  { href: "/", text: "Index" },
  { href: "/newtype", text: "New car type" },
  { href: "/newbrand", text: "New car brand" },
];

async function indexPage(req, res) {
  const carBrands = await dbQuery.getCarBrands();
  res.render("index", {
    title: "Index Page",
    carBrands: carBrands,
    links: links,
  });
}

async function typeForm(req, res) {
  res.render("form", {
    title: "Input New Type",
    formName: "partials/typeForm",
    links: links,
  });
}

async function brandForm(req, res) {
  res.render("form", {
    title: "Input New Brand",
    formName: "partials/brandForm",
    links: links,
  });
}

module.exports = { indexPage, typeForm, brandForm };
