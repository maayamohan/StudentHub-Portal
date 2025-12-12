import StudentCard from "./components/StudentCard";

export default function App() {
  return (
    <div>
      <h1>StudentHub Portal</h1>
      <p>Manage Students Easily</p>
      <br />
      <StudentCard name="Maaya" dept="CSE" scholarship={false} />
      <StudentCard name="Saket" dept="CND" scholarship={true} />
    </div>
  );
}