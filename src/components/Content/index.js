import "./style.css";
import HomePage from "../HomePage";
import ProductList from "../ProductList";
import FAQPage from "../FAQPage";
import SalePage from "../SalePage";
import ContactPage from "../ContactPage";
import { Route, Routes } from "react-router-dom";

const Content = ({ isOpenCart }) => {
  return (
    <>
      <div
        className="content"
        style={{ filter: isOpenCart ? "brightness(70%)" : "brightness(1)" }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shopall" element={<ProductList />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contactus" element={<ContactPage />} />
        </Routes>
      </div>
    </>
  );
};

export default Content;
