import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const specificationService = new CreateSpecificationService(
    specificationRepository
  );

  try {
    specificationService.execute({ description, name });
  } catch (error) {
    res.status(404).json({ error });
  }

  return res.status(201).send();
});

export { specificationRoutes };
