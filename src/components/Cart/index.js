import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ openCart, closeCard}) => {
  return (
    <>
      {openCart ? (
        <div className="cart p-[16px]">
          <div className="cart-header flex items-center justify-between">
            <div className="cart-header-text flex items-center gap-1">
                <p>Cart</p>
                <span>(0 items)</span>
            </div>
            <button className="cart-close" onClick={closeCard}>
              <FontAwesomeIcon icon={faXmark} size="2x"/>
            </button>
          </div>
          <div className="w-full h-[1px] bg-black my-[16px]"></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Cart;
