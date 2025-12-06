import "./App.css";
import { AdminLayout } from "./components/AdminLayout";
import { DashboardContent } from "./components/DashboardContent";

function App() {
  return (
    <AdminLayout>
      <DashboardContent />
    </AdminLayout>
  );
}

export default App;
