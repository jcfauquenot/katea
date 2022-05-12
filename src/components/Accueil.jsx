import React from "react";
import forest from "../assets/natureforesttreesfog.jpg";

const Accueil = () => {
  return (
    // <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1">
      <div className="relative overflow-hidden shadow-lg cursor-pointer">
        <img
          className="object-cover w-full h-screen"
          src={forest}
          alt={forest}
        />

        <div className="absolute top-0 left-0 px-6 py-4">
          <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">
            This is the title
          </h4>
          <p className="leading-normal text-white">Mining for the forest</p>
        </div>
      </div>
      <div className="box-content p-4 text-center border-1">
        <h1 className="text-2xl">Recuperer l’énergie pour la miner</h1>
        <p>
          Le principe est de placer nos fermes de minages à des endroits ou la
          Biodiversiter donne son énergie
        </p>
      </div>
    </div> // fin de nature
  );
};

export default Accueil;
