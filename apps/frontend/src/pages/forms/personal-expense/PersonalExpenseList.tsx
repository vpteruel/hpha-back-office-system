import "../../pages.css";

export function PersonalExpenseList() {
  return (
    <div className="list-page">
      <div className="page-header">
        <h1>Personal Expense Reimbursements</h1>
        <p>View and manage all personal expense requests</p>
      </div>
      <div className="list-container">{/* List content will go here */}</div>
    </div>
  );
}
