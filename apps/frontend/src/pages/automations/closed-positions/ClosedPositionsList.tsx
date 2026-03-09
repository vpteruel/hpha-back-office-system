import "../../pages.css";

export function ClosedPositionsList() {
  return (
    <div className="list-page">
      <div className="page-header">
        <h1>Closed Positions List</h1>
        <p>View and manage closed positions</p>
      </div>
      <div className="list-container">{/* Closed positions content will go here */}</div>
    </div>
  );
}
