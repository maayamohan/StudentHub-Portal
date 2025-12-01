export default function StudentCard ({ name, dept }) {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>Department: {dept}</p>
        </div>
    );
}