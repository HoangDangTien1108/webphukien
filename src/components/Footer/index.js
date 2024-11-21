import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { faCopyright, faSnowflake } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer bg-[#6E5A51] flex flex-col items-center justify-center py-[40px] gap-3">
        <FontAwesomeIcon icon={faSnowflake} size="2x" color="#E6F7FF" />
        <span className="text-white font-relaway text-[13px] flex gap-1 items-center">
          <FontAwesomeIcon icon={faCopyright} style={{color:'white'}}/>
          2024 by SKIBIDI SNOW
        </span>
      </div>
    </>
  );
};

export default Footer;
