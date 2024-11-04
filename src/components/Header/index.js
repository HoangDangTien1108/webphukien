import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import {
  faBagShopping,
  faSnowflake,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { contactPage, faqPage, homePage, productList, salePage } from "../../redux/actions";

const Header = ({isOpenCart, isOpenLogin}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="header">
        <h1 className="text-center py-[20px]">
          SKIBIDI  <FontAwesomeIcon icon={faSnowflake} color="" style={{paddingLeft:'2px'}}/>SNOW
        </h1>
        <div className="header-nav flex items-center justify-between py-[13px] px-[25px]">
          <button className="nav-user flex items-center gap-4" onClick={isOpenLogin}>
            <FontAwesomeIcon
              icon={faUser}
              style={{
                fontSize:'25px',
                color: "#a4848c",
              }}
            />
            <span>Log in</span>
          </button>
          <div className="nav-menu flex items-center gap-8 self-end">
            <button style={{ color: "#a98b92" }} onClick={() => dispatch(homePage())}>HOME</button>
            <button onClick={() => dispatch(productList())}>SHOP ALL</button>
            <button onClick={() => dispatch(salePage())}>SALE</button>
            <button onClick={() => dispatch(faqPage())}>FAQ</button>
            <button onClick={() => dispatch(contactPage())}>CONTACT US</button>
          </div>
          <div className="nav-cart">
            <button onClick={isOpenCart}>
              <FontAwesomeIcon
                icon={faBagShopping}
                style={{ fontSize:'35px', color: "#a4848c" }}
              />
              <span>0</span>
            </button>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </>
  );
};

export default Header;
