import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import {
  faBagShopping,
  faSnowflake,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = ({ isOpenCart, isOpenLogin }) => {
  // const [colorItem, setColorItem] = useState("HOME");

  // const liItem = document.getElementsByClassName("my-link");
  // const handleSetColorLink = () => {
  //   for (let i = 0; i < liItem.length; i++) {
  //     console.log(liItem);
  //   }
  // };

  return (
    <>
      <div className="header">
        <h1 className="text-center py-[20px] flex items-center justify-center text-[#251E1B]">
          SKIBIDI
          <FontAwesomeIcon
            icon={faSnowflake}
            size="2x"
            style={{ padding: "0px 15px", color: "#E6F7FF" }}
          />
          SNOW
        </h1>
        <div className="header-nav flex items-center justify-between py-[13px] px-[25px]">
          <button
            className="nav-user flex items-center gap-4"
            onClick={isOpenLogin}
          >
            <FontAwesomeIcon
              icon={faUser}
              style={{
                fontSize: "25px",
                color: "#a4848c",
              }}
            />
            <span>Log in</span>
          </button>
          <nav className="nav-menu flex self-end justify-center">
            <ul className="flex gap-9 pr-4">
              <li className="my-link">
                <Link className="link" to="/">
                  HOME
                </Link>
              </li>
              <li className="my-link">
                <Link className="link" to="/shopall">
                  SHOP ALL
                </Link>
              </li>
              <li className="my-link">
                <Link className="link" to="/sale">
                  SALE
                </Link>
              </li>
              <li className="my-link">
                <Link className="link" to="/faq">
                  FAQ
                </Link>
              </li>
              <li className="my-link">
                <Link className="link" to="/contactus">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </nav>
          <div className="nav-cart">
            <button onClick={isOpenCart}>
              <FontAwesomeIcon
                icon={faBagShopping}
                style={{ fontSize: "35px", color: "#a4848c" }}
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
