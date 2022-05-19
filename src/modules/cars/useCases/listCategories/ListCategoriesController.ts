import { Request, Response } from "express";

export class ListCategoriesController {
  handle(req: Request, res: Response): Response {
    const allCategories = categoryRepository.list();

    return res.json(allCategories);
  }
}
