import "../../components/layout/blog/Blog";
import Footer from "../../components/layout/Footer/Footer";
import Blog from "../../components/layout/blog/Blog";
import Header from "../../components/layout/header/Header";
import Projects from "../../components/layout/projects/Projects";
import Section from "../../components/layout/section/Section";
import Services from "../../components/layout/services/Services";
import Slider from "../../components/layout/slider/Slider";
import FormModal from "../../components/formModal/FormModal";

const HomePage = () => {
  return (
    <>
      <Header />
      <Slider />
      <Services />
      <Section />
      <Projects />
      <Blog />
      <Footer />
      <FormModal />
    </>
  );
};

export default HomePage;
