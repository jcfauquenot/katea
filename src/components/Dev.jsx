import React from "react";
import dev from "../assets/dev.png";

const Dev = () => {
  return (
    <div c>
      <img src={dev} alt="{dev}" />
      <div>
        <div className="m-2 text-center text-gray-400">
          <h2 className="pt-6 text-2xl font-bold text-black">
            La création de Katea
          </h2>
          <p className="m-6">
            C{`'`}est par différents voyages individuels à travers le monde en
            tant que developpeur web et blockchain, que notre travail nous a
            amené à découvrir de nombreuses mines de crypto-monnaies totalement
            excentrer du monde, dans des pays isoler.
          </p>
          <p className="m-6">
            Ces mines produits une quantité folle de surplue d{`'`}énergie, qui
            entraînent une déperdition forte d{`'`}énergie.
          </p>
          <p className="m-6">
            C'est alors, que suite à notre rencontre, et après en avoir discuter
            entre nous, nous est venu l{`'`}idée de rendre à César ce qui est à
            César et de trouver un moyen de réutiliser cette énergie perdue en
            réinstallant des fermes de minages directement en lien avec des
            éoliennes et des barrages électriques . C{`'`}est alors qu{`'`} est
            venu au monde Katea, la première ferme de minage 100% verte et
            ecologique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dev;
