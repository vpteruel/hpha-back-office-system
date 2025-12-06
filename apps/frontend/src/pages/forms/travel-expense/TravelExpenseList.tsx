import "../../pages.css";

export function TravelExpenseList() {
  return (
    <div className="list-page">
      <div className="page-header">
        <h1>Travel Expense Reimbursements</h1>
        <p>View and manage all travel expense requests</p>
      </div>
      <div className="list-container">{/* List content will go here */}</div>
    </div>
  );
}
