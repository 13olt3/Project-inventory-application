const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexController.indexPage);
indexRouter.get("/newtype", indexController.typeForm);
indexRouter.get("/newbrand", indexController.brandForm);
indexRouter.get("/newcar", indexController.carForm);

indexRouter.post("/newtype", indexController.createNewType);
indexRouter.post("/newbrand", indexController.createNewBrand);

module.exports = indexRouter;
