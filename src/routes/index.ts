import { Router } from "express";
import { routes } from "./categories.routes";
import { specificationRoutes } from "./specifications.routes";

const router = Router();

router.use("/categories", routes);
router.use("/specifications", specificationRoutes);

export { router };
