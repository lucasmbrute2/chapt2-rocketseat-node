import { Router } from "express";
import { categoriesRouter } from "./categories.routes";
import { specificationRoutes } from "./specifications.routes";

const router = Router();

router.use("/categories", categoriesRouter);
router.use("/specifications", specificationRoutes);

export { router };
