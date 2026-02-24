const dbQuery = require("../db/queries");
const links = [
  { href: "/", text: "Index" },
  { href: "/newtype", text: "New Car Type" },
  { href: "/newbrand", text: "New Car Brand" },
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

async function carForm(req, res) {
  const carBrands = await dbQuery.getCarBrands();
  const carTypes = await dbQuery.getCarTypes();
  const carColors = [
    "red",
    "blue",
    "green",
    "black",
    "grey",
    "yellow",
    "white",
  ];
  res.render("form", {
    title: "New Car Details",
    formName: "partials/itemForm",
    links: links,
    carBrands: carBrands,
    carTypes: carTypes,
    carColors: carColors,
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

async function createNewCar(req, res) {
  const carData = {
    model_name: req.body.model_name,
    car_color: req.body.car_color,
    horsepower: req.body.horsepower,
    car_description: req.body.car_description,
    type_id: req.body.type_id,
    brand_id: req.body.brand_id,
  };

  dbQuery.createNewCar(carData);
  res.redirect("/");
}

module.exports = {
  indexPage,
  typeForm,
  brandForm,
  carForm,
  createNewType,
  createNewBrand,
  createNewCar,
};
