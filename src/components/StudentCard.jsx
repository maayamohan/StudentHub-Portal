export default function StudentCard ({ name, dept }) {
    return (
        <div className="card">
            <h3>{name} {scholarship && "🎓"}</h3>
            <p>Department: {dept}</p>
        </div>
    );
}