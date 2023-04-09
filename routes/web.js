import express from "express";
const router = express.Router();
import { homeController } from "../controllers/homeController.js";
import { servicesController } from "../controllers/servicesController.js";
import { skillController } from "../controllers/skillController.js";
import { contactController } from "../controllers/contactController.js";
import { contactFormController } from "../controllers/contactFormController.js";
import { adminController } from "../controllers/adminController.js";

router.get("/", homeController);
router.get("/services", servicesController);
router.get("/skill", skillController);
router.get("/contact", contactController);
router.post("/contact", contactFormController);
router.get("/admin/", adminController);
router.post("/admin/", adminController);

export default router;
