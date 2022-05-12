import { Request, Response } from "express";
import createCourseService from "./createCourseService";

export function createCourse(req: Request, res: Response) {
	createCourseService.execute({
    duration: 10,
    name: "NodeJS",
    educator:  "Dani"
  })

  return res.send()
}
