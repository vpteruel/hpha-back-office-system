import "../pages.css";

export function UsersPage() {
  return (
    <div className="list-page">
      <div className="page-header">
        <h1>Users Management</h1>
        <p>View and manage system users</p>
      </div>
      <div className="list-container">{/* Users content will go here */}</div>
    </div>
  );
}
