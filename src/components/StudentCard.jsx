export default function StudentCard ({ name, dept, scholarship }) {

    function handleView() {
        alert(`${name}'s details`)
    }

    return (
        <div className="card">
            <h3>{name} {scholarship && "🎓"}</h3>
            <p>Department: {dept}</p>
            <button onClick={handleView}>View Details</button>
        </div>
    );
}