import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/layout/Sidebar";
import { Dashboard } from "./pages/Dashboard";
import { Products } from "./pages/Products";
import { Orders } from "./pages/Orders";
import { Customers } from "./pages/Customers";
import { Promotions } from "./pages/Promotions";
import { Settings } from "./pages/Settings";
import { Categories } from "./pages/Categories";
import { Collections } from "./pages/Collections";
import { Inventory } from "./pages/Inventory";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Sidebar />
        <main className="ml-64">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
