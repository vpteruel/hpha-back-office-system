import "../../pages.css";

export function PurchaseList() {
  return (
    <div className="list-page">
      <div className="page-header">
        <h1>Purchase Requisitions</h1>
        <p>View and manage all purchase requests</p>
      </div>
      <div className="list-container">{/* List content will go here */}</div>
    </div>
  );
}
