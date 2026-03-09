import "../../pages.css";

export function CateringDetail() {
  return (
    <div className="detail-page">
      <div className="page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <h1 style={{ margin: 0 }}>Catering Requisition Details</h1>
        </div>
        <p style={{ marginTop: '0.5rem' }}>View detailed information about this request</p>
      </div>
      
      <div className="dashboard-layout">
        <section className="dashboard-panel">
          {/* Detail content will go here */}
          <h2 style={{ borderBottom: 'none', paddingBottom: 0, margin: 0 }}>Request Data</h2>
          <div className="panel-info-grid">
             <div className="panel-info-item">
              <span className="panel-info-label">Status</span>
              <span className="panel-info-value">Pending Implementation</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
