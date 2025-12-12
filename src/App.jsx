import { useState } from "react";
import StudentCard from "./components/StudentCard";

export default function App() {

  const [students, setStudents] = useState([
    { id:1, name:"Maaya", dept:"CSE", scholarship:false },
    { id:2, name:"Saket", dept:"CND", scholarship:true },
  ]);

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
    </div>
  );
}