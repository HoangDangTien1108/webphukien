import "./style.css";
import homeImage from "../../assets/images/home.jpg";
import homeBtImg from "../../assets/images/homebtimg.jpg";
import btImgProduct from "../../assets/images/btimgproduct.jpg";
import { useNavigate } from "react-router-dom";
import ProductFavourite from "../ProductFavourite";

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
          <button className="homepage-image-button bg-white text-[#251E1B] py-[30px]" onClick={() =>{navigate('/sale')}}>
            <span className="font-relaway text-[40px] font-semibold tracking-[8px] pl-[8px] leading-[32px] hover:text-[#a4848c]">SALE</span>
            <img src={homeBtImg} alt="" className="h-[200px]"/>
            <span className="font-amaticsc text-[80px] leading-[20px]">10% OFF</span>
          </button>
          <div className="homepage-image-button text-white bg-[#cfb8bf] flex justify-center gap-4">
            <span className="font-relaway text-[40px] font-semibold leading-[20px]">FREE</span>
            <span className="font-amaticsc text-[80px] leading-[75px]">SHIPPING</span>
          </div>
          <div className="homepage-image-button h-btn-product">
            <img className="h-[320px]" src={btImgProduct} alt=""/>
            <button onClick={() => navigate('/shopall')}>GET COZY</button>
          </div>
        </div>
        <ProductFavourite/>
      </div>
    </>
  );
};

export default HomePage;
