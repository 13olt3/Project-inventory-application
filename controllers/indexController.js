const dbQuery = require("../db/queries");
const links = [
  { href: "/", text: "Index" },
  { href: "/newtype", text: "New car type" },
  { href: "/newbrand", text: "New car brand" },
  { href: "/newcar", text: "New Car Details" },
];

function indexPage(req, res) {
  res.render("index", {
    title: "Index Page",
    links: links,
  });
}

async function typeForm(req, res) {
  const carTypes = await dbQuery.getCarTypes();
  res.render("form", {
    title: "Input New Type",
    formName: "partials/typeForm",
    links: links,
    carTypes: carTypes,
  });
}

async function brandForm(req, res) {
  const carBrands = await dbQuery.getCarBrands();
  res.render("form", {
    title: "Input New Brand",
    formName: "partials/brandForm",
    links: links,
    carBrands: carBrands,
  });
}

function carForm(req, res) {
  res.render("form", {
    title: "New Car Details",
    formName: "partials/itemForm",
    links: links,
  });
}

async function createNewType(req, res) {
  dbQuery.createNewType(req.body.typeName, req.body.typeDesc);
  res.redirect("/");
}
async function createNewBrand(req, res) {
  dbQuery.createNewBrand(req.body.brandName);
  res.redirect("/");
}

module.exports = {
  indexPage,
  typeForm,
  brandForm,
  carForm,
  createNewType,
  createNewBrand,
};
