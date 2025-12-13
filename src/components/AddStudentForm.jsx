import { useState } from "react";

export default function AddStudentForm({ addStudent }) {
    const [name, setName] = useState("");
    const [dept, setDept] = useState("");
    const [scholarship, setScholarship] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        addStudent(name, dept, scholarship);
        setName("");
        setDept("");
        setScholarship(false);
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Name"
            />
            <input
                value={dept}
                onChange={e => setDept(e.target.value)}
                placeholder="Department"
            />
            <input
                type="checkbox"
                checked={scholarship}
                onChange={e => setScholarship(e.target.checked)}
            />
            <button type="submit">Add Student</button>
        </form>
    );
}