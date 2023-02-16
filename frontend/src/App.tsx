import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Booking from "./pages/booking";
import Dashboard from "./pages/dashboard";
import Listing from "./pages/listing";
import SelectSeat from "./pages/select-seat";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="listing/:listBy/:id" element={<Listing />} />
          <Route path="select/:screenId/:showId" element={<SelectSeat />} />
          <Route path="book" element={<Booking />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
