import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;

    try {
      this.createSpecificationUseCase.execute({ description, name });
    } catch (error) {
      res.status(404).json({ error });
    }

    return res.status(201).send();
  }
}
