interface Course {
	name: string;
	duration?: number;
	educator: string;
}

class CreateCourseService {
	execute({ duration = 8, educator, name }: Course) {
		console.log(` Olá ${name}, sua ${duration} é ${educator}`);
	}
}

export default new CreateCourseService();
("");
