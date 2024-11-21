import "./style.css";
import productImg1 from "../../assets/images/productimg1.webp";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductFavourite = () => {
  const [productsState, setProductsState] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/photos?_limit=4"
        );
        setProductsState(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getProducts();
  });

  return (
    <>
      <div className="productfavourite pt-[50px] pb-[65px]">
        <div className="productfavourite-text flex items-center justify-center gap-6">
          <div className="line w-[6%] h-[2px]"></div>
          <span className="font-amaticsc text-[45px] font-normal text-[#251E1B]">
            OUR FAVES
          </span>
          <div className="line w-[6%] h-[2px]"></div>
        </div>
        <div className="flex items-center justify-center gap-[25px] py-[25px]">
          {productsState.map((product) => {
            return (
              <div
                key={product.id}
                className="flex flex-col justify-center items-center gap-4"
              >
                <button>
                  <img
                    src={product.url}
                    alt={product.title}
                    className="h-[225px]"
                  />
                </button>
                <span className="text-[16px] font-relaway text-[#251E1B] leading-[13px]">
                  {product.title}
                </span>
                <p className="text-[16px] font-relaway text-[#493C36] leading-[8px]">
                  ${product.price}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductFavourite;
