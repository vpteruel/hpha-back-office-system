export function DashboardContent() {
  return (
    <div className="dashboard">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📝</div>
          <div className="stat-info">
            <h3>Total Forms</h3>
            <p className="stat-value">342</p>
            <span className="stat-change positive">+15.3%</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⏳</div>
          <div className="stat-info">
            <h3>Pending Approval</h3>
            <p className="stat-value">28</p>
            <span className="stat-change warning">Needs attention</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-info">
            <h3>Approved</h3>
            <p className="stat-value">298</p>
            <span className="stat-change positive">+8.2%</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-info">
            <h3>Active Users</h3>
            <p className="stat-value">45</p>
            <span className="stat-change positive">+3</span>
          </div>
        </div>
      </div>

      <div className="content-grid">
        <div className="card">
          <h2>Recent Form Submissions</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Form Type</th>
                  <th>Submitted By</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Catering Requisition</td>
                  <td>John Doe</td>
                  <td>
                    <span className="badge warning">Pending</span>
                  </td>
                  <td>Dec 5, 2025</td>
                </tr>
                <tr>
                  <td>Purchase Requisition</td>
                  <td>Jane Smith</td>
                  <td>
                    <span className="badge success">Approved</span>
                  </td>
                  <td>Dec 4, 2025</td>
                </tr>
                <tr>
                  <td>Travel Expense</td>
                  <td>Bob Johnson</td>
                  <td>
                    <span className="badge warning">Pending</span>
                  </td>
                  <td>Dec 3, 2025</td>
                </tr>
                <tr>
                  <td>Video Surveillance</td>
                  <td>Alice Williams</td>
                  <td>
                    <span className="badge success">Approved</span>
                  </td>
                  <td>Dec 3, 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h2>Quick Actions</h2>
          <div className="actions-list">
            <button className="action-btn">🍽️ New Catering Request</button>
            <button className="action-btn">📹 New Surveillance Request</button>
            <button className="action-btn">🛒 New Purchase Request</button>
            <button className="action-btn">💳 New Personal Expense</button>
            <button className="action-btn">✈️ New Travel Expense</button>
            <button className="action-btn">👥 Manage Users</button>
          </div>
        </div>
      </div>
    </div>
  );
}
