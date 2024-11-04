import { useSelector } from "react-redux";
import "./style.css";
import HomePage from "../HomePage";
import ProductList from "../ProductList";
import FAQPage from "../FAQPage";
import SalePage from "../SalePage";
import ContactPage from "../ContactPage";

const Content = ({isOpenCart}) => {
  const currentPage = useSelector((state) => state.currentPage);
  const renderComponent = () => {
    switch (currentPage) {
      case "homepage":
        return <HomePage />;
      case "productlist":
        return <ProductList />;
      case "salepage":
        return <SalePage />;
      case "faqpage":
        return <FAQPage />;
      case "contactpage":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };
  return (
    <>
      <div className="content" style={{filter: isOpenCart ? 'brightness(70%)' : 'brightness(1)'}}>
        {renderComponent()}
      </div>
    </>
  );
};

export default Content;
