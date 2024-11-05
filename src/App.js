import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Login from "./components/Login";
import Content from "./components/Content";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleOpenCart = () => {
    setOpenCart(true);
  };

  const handleCloseCartOrLogin = () => {
    setOpenCart(false);
    setOpenLogin(false);
  };

  const handleOpenLogin = () => {
    setOpenLogin(true);
  };

  console.log(openCart);

  return (
    <div
      className="App"
      style={{
        backgroundColor:openCart ? "#b2a8a5" : "#eee4e0",
      }}
    >
      <Header isOpenCart={handleOpenCart} isOpenLogin={handleOpenLogin}/>
      <Cart openCart={openCart} closeCard={handleCloseCartOrLogin} />
      <Login openLogin={openLogin} closeLogin={handleCloseCartOrLogin} />
      <Content isOpenCart={openCart}/>
    </div>
  );
}

export default App;
