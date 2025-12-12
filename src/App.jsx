import { useState } from "react";
import StudentCard from "./components/StudentCard";
import AddStudentForm from "./components/AddStudentForm";

export default function App() {

  const [students, setStudents] = useState([
    { id:1, name:"Maaya", dept:"CSE", scholarship:false },
    { id:2, name:"Saket", dept:"CND", scholarship:true },
  ]);

  function addStudent(name, dept, scholarship) {
    setStudents([...students, {id:(students.length + 1), name, dept, scholarship }])
  }

  return (
    <div>
      <h1>StudentHub Portal</h1>
      <p>Manage Students Easily</p>
      <br />
      {students.map(s => (
        <StudentCard
          key={s.id}
          name={s.name}
          dept={s.dept}
          scholarship={s.scholarship}
        />
      ))}
      <AddStudentForm addStudent={addStudent} />
    </div>
  );
}