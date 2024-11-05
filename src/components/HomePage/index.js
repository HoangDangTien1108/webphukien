import "./style.css";
import homeImage from "../../assets/images/home.jpg";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="homepage">
        <div className="homepage-introduct">
          <img src={homeImage} alt="" />
          <div className="introduct-text bg-[#A5B07D] rounded-[50%] flex flex-col items-center justify-center gap-3">
            <span>NEW</span>
            <p>FOR FALL</p>
            <div className="h-[2px] w-[10%] bg-white my-3"></div>
            <button
              onClick={() => {
                navigate("/shopall");
              }}
            >
              SHOP NOW &gt;
            </button>
          </div>
        </div>
        <div className="homepage-image">
          <div className="homepage-image-button"></div>
          <div className="homepage-image-button"></div>
          <div className="homepage-image-button"></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
