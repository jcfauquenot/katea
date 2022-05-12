import React from "react";

const GreenMining = () => {
  return (
    <>
      <h1 className=" text-7xl pt-6 text-center ">GREEN MINING</h1>
      <div className="flex pl-6 mr-7">
        <img
          src="https://images.pexels.com/photos/3315512/pexels-photo-3315512.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          className="rounded-3xl max-w-sm  float-left ml-6"
          alt="Image_eolienne"
        />
        <div className="pl-10 pt-20 pr-12">
          <h2 className="text-5xl text-center tracking-widest  ">
            Ecologie, minage et Katea
          </h2>
          <p className="text-2xl mt-6 pt-9 leading-10 tracking-wider text-center">
            “I declare this world is so beautiful that I can hardly believe it
            exists.” The beauty of nature can have a profound effect upon our
            senses, those gateways from the outer world to the inner, whether it
            results in disbelief in its very existence as Emerson notes, or
            feelings such as awe, wonder, or amazement.
          </p>
        </div>
        <div className="flex pr-6 ml-6 ">
          <img
            src="https://images.pexels.com/photos/808201/pexels-photo-808201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            className="  rounded-3xl max-w-sm float-right  "
            alt="Image_barrage"
          />
        </div>
      </div>
    </>
  );
};

export default GreenMining;
