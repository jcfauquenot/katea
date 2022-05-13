import React from "react";
import Imgfond from "../assets/fondtoken.png";
import Arbrehum from "../assets/arbrehumain.png";
import Metamask from "../assets/metamask.png";
import Ktaarbre from "../assets/ktaarbre.png";
import Uniswap from "../assets/uniswap.png";
import Ktaprice from "../assets/ktaprice.png";
import Mainplant from "../assets/mainplant.png";
import Compkta from "../assets/compteurkta.png";
import Mecburn from "../assets/mecburn.png";

const Token = () => {
  return (
    <div className="">
      <div>
        <div>
          <img className="" src={Imgfond} alt="fondtoken" />
        </div>
        <div className="flex space-x-11 ">
          <div>
            <img className="m-10 flex-start" src={Arbrehum} alt="Arbrehum" />
          </div>
          <div>
            <p className="m-10 mb-10 text-3xl">Le Processus achat de KTA</p>
            <img
              className="w-8/12 gap-32 ml-10 h-2/5 flex-end"
              src={Metamask}
              alt="Metamask"
            />
            <img className="w-8/12 m-10 mb-10 " src={Uniswap} alt="Uniswap" />
            <img className="w-4/12 m-10 mb-10 " src={Ktaarbre} alt="Ktaarbre" />
          </div>
        </div>
        <p className="m-10 mb-10 text-2xl text-center" />
        <div className="align-items justify-content">
          <img className="max-w-full " src={Mecburn} alt="Mecakta" />
        </div>
        <img className="w-11/12 m-10 h-4/5 " src={Ktaprice} alt="Ktaprice" />
        <div className="flex m-10">
          <div className="flex-start">
            <img className="w-8/12 " src={Mainplant} alt="Mainplant" />
          </div>
          <div className="place-items-center">
            <img className="items-end w-8/12" src={Compkta} alt="Compkta" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
