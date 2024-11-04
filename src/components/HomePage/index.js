import "./style.css";
import homeImage from "../../assets/images/home.jpg";
import { useDispatch } from "react-redux";
import { productList } from "../../redux/actions";

const HomePage = () => {
    const dispatch = useDispatch();
  return (
    <>
      <div className="homepage">
        <div className="homepage-introduct">
          <img src={homeImage} alt="" />
          <div className="introduct-text bg-[#A5B07D] rounded-[50%] flex flex-col items-center justify-center gap-3">
            <span>NEW</span>
            <p>FOR FALL</p>
            <div className="h-[2px] w-[10%] bg-white my-3"></div>
            <button onClick={() => dispatch(productList())} style={{transition:'1s'}}>SHOP NOW &gt;</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
