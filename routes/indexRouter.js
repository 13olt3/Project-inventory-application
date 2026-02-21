const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexController.indexPage);

indexRouter.get("/newtype", indexController.typeForm);

indexRouter.get("/newbrand", indexController.brandForm);

module.exports = indexRouter;
