import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cats from "./pages/Cats";
import ContactUs from "./pages/ContactUs";
import Menu from "./pages/Menu";
import NoPage from "./pages/NoPage";
import Reservation from "./pages/Reservation";
import Shop from "./pages/Shop";

export default function App() {
  return (
    <BrowserRouter basename= "/cafe">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Cats" element={<Cats />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="Reservation" element={<Reservation />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="*" element={<NoPage />} />
          <Route path="Home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);