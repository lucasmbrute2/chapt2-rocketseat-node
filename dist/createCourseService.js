"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute(name, duration, instructor) {
        console.log(` Olá ${name}, sua ${duration} é ${instructor}`);
    }
}
exports.default = new CreateCourseService;
