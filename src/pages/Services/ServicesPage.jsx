import Header from "../../components/layout/header/Header";
import Slider from "../../components/layout/slider/Slider";
import Hots from "../../components/layout/hots/Hots";
import Help from "../../components/layout/help/Help";
import Blog from "../../components/layout/blog/Blog";
import Footer from "../../components/layout/Footer/Footer";
import Product from "../../components/layout/product/Product";
import FormModal from "../../components/formModal/FormModal";

const ServicesPage = () => {
  return (
    <>
      <Header />
      <Slider />
      <Product />
      <Help />
      <Hots />
      <Blog />
      <Footer />
      <FormModal />
    </>
  );
};

export default ServicesPage;
