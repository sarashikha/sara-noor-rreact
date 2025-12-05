import { useState, useEffect } from "react";
import { Course } from "../models/Course";

export default function CourseTable() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("courses");
    if (saved) {
      const parsed = JSON.parse(saved);
      const loaded = parsed.map(
        (c: any) => new Course(c.id, c.name, c.points, c.lecturer, c.semester)
      );
      setCourses(loaded);
    }
  }, []);

  function addRandomCourse() {
    const newCourse = new Course(
      crypto.randomUUID(),
      "Course " + Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 6) + 1,
      "Lecturer " + Math.floor(Math.random() * 10),
      ["A", "B", "C"][Math.floor(Math.random() * 3)]
    );
    setCourses([...courses, newCourse]);
  }

  function saveToLocalStorage() {
    localStorage.setItem("courses", JSON.stringify(courses));
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Courses Table</h1>

      <button onClick={addRandomCourse}>Add Random Course</button>
      <button onClick={saveToLocalStorage} style={{ marginLeft: "10px" }}>
        Save to LocalStorage
      </button>

      <table border={1} style={{ marginTop: "20px", width: "70%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Points</th>
            <th>Lecturer</th>
            <th>Semester</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((c, index) => (
            <tr key={index}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.points}</td>
              <td>{c.lecturer}</td>
              <td>{c.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
