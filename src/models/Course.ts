export class Course {
  id: string;
  name: string;
  points: number;
  lecturer: string;
  semester: string;

  constructor(id: string, name: string, points: number, lecturer: string, semester: string) {
    this.id = id;
    this.name = name;
    this.points = points;
    this.lecturer = lecturer;
    this.semester = semester;
  }
}
