import HomePage from "./pages/homePage/HomePage";
import ServicesPage from "./pages/Services/ServicesPage";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about/AboutPage";
import BlogsPage from "./pages/blogs/BlogsPage";
import ContactsPage from "./pages/contacts/ContactsPage";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route  path="/services" element={<ServicesPage />} />
      <Route  path="/blogs" element={<BlogsPage />} />
      <Route  path="/about" element={<AboutPage />} />
      <Route  path="/contact" element={<ContactsPage />} />
    </Routes>
  );
}

export default App;
