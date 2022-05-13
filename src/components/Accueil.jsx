import React from "react";
import forest from "../assets/natureforesttreesfog.jpg";
import Dev from "./Dev";
import Footer from "./Footer";

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
      <div className="box-content p-2 text-center border-1">
        <h1 className="pt-6 text-2xl font-bold">
          Récuperer l’énergie pour la miner
        </h1>
        <p className="h-14">
          Le principe est de placer nos fermes de minages à des endroits ou la
          Biodiversiter donne son énergie
        </p>
        <button
          type="button"
          className="px-4 py-2 font-bold text-white bg-green-600 rounded hover:bg-green-700"
        >
          En savoir plus
        </button>
      </div>
      <Dev />
      <Footer />
    </div> // fin de nature
  );
};

export default Accueil;
