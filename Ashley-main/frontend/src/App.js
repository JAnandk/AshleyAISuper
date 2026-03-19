import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Dashboard from "./pages/Dashboard";
import DeliveryLogistics from "./pages/DeliveryLogistics";
import StoreTeams from "./pages/StoreTeams";
import Alerts from "./pages/Alerts";
import Recommendations from "./pages/Recommendations";
import SalesConversion from "./pages/SalesConversion";
import InventoryAssortment from "./pages/InventoryAssortment";
import RegionalView from "./pages/RegionalView";
import PlaybookStudio from "./pages/PlaybookStudio";
import ManufacturingOps from "./pages/ManufacturingOps";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sales-conversion" element={<SalesConversion />} />
          <Route path="/inventory-assortment" element={<InventoryAssortment />} />
          <Route path="/regional-view" element={<RegionalView />} />
          <Route path="/playbook-studio" element={<PlaybookStudio />} />
          <Route path="/manufacturing-ops" element={<ManufacturingOps />} />
          <Route path="/delivery-logistics" element={<DeliveryLogistics />} />
          <Route path="/store-teams" element={<StoreTeams />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
