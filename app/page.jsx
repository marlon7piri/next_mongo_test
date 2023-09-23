

import React from "react";
import HeaderContainer from "./components/HeaderContainer";

import PromoCocteleria from "./components/PromoCocteleria";
import Cotizacion from "./components/Cotizacion";
import PromoComida from "./components/PromoComida";


function page() {
 

  return (
    <div className="">
      <HeaderContainer />
      <Cotizacion />
      <PromoComida />
      <PromoCocteleria />
    </div>
  );
}

export default page;
