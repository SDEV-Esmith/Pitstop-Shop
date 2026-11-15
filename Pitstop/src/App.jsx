import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import BookAppointment from "./pages/BookAppointment.jsx";
import About from "./pages/About.jsx";
import "./styles/App.css";
import "./styles/global.css";
import MainLayout from "./MainLayout.jsx";
import Services from "./pages/ServiceList.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
function App() {
  return (
    <MainLayout>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
