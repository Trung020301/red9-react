import HomePage from "./pages/homePage/HomePage";
import ServicesPage from "./pages/services/ServicesPage";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about/AboutPage";
import BlogsPage from "./pages/blogs/BlogsPage";
import ContactsPage from "./pages/contacts/ContactsPage";
import PageNotFound from "./pages/notFound/PageNotFound";
function App() {
  return (
    <Routes>
      <Route  path="/" element={<HomePage />} />
      <Route  path="/services" element={<ServicesPage />} />
      {/* <Route  path="/blogs" element={<BlogsPage />} /> */}
      <Route  path="/about" element={<AboutPage />} />
      {/* <Route  path="/contact" element={<ContactsPage />} /> */}
      <Route  path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
