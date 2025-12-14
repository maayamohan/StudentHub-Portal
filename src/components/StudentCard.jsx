export default function StudentCard ({ id, name, dept, scholarship, onDelete }) {

    function handleView() {
        alert(`${name}'s details`)
    }

    return (
        <div className="card">
            <h3>{name} {scholarship && "🎓"}</h3>
            <p>Department: {dept}</p>
            <button onClick={handleView}>View Details</button>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}