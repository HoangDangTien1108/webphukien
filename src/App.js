import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Login from "./components/Login";
import Content from "./components/Content";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const location = useLocation();

  const elementOverflow = document.querySelector("*");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleOpenCart = () => {
    setOpenCart(true);
  };

  const handleCloseCartOrLogin = () => {
    setOpenCart(false);
    setOpenLogin(false);
    elementOverflow.style.overflow = "auto";
  };

  const handleOpenLogin = () => {
    setOpenLogin(true);
    elementOverflow.style.overflow = "hidden";
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: openCart ? "#b2a8a5" : "#eee4e0",
      }}
    >
      <Header isOpenCart={handleOpenCart} isOpenLogin={handleOpenLogin} />
      <Cart openCart={openCart} closeCard={handleCloseCartOrLogin} />
      <Login openLogin={openLogin} closeLogin={handleCloseCartOrLogin} />
      <Content isOpenCart={openCart} />
      <Footer/>
    </div>
  );
}

export default App;
