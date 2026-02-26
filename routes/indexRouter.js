const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexController.indexPage);
indexRouter.get("/newtype", indexController.typeForm);
indexRouter.get("/newbrand", indexController.brandForm);
indexRouter.get("/newcar", indexController.carForm);
indexRouter.get("/allcars", indexController.showAllCars);
indexRouter.get("/delete/:id", indexController.deleteCar);
indexRouter.get("/details/:id", indexController.carDetails);
indexRouter.get("/edit/:id", indexController.editCarDetails);

indexRouter.post("/newtype", indexController.createNewType);
indexRouter.post("/newbrand", indexController.createNewBrand);
indexRouter.post("/newcar", indexController.createNewCar);
indexRouter.post("/editcar/:id", indexController.newCarDetails);

module.exports = indexRouter;
