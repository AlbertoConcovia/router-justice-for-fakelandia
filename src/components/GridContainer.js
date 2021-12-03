import GridData from "./GridData";
import GridTitle from "./GridTitle";
import React, { useContext } from "react";
import { FavouritesContext } from "./pages/Misdemeanour";

function GridContainer() {
  const { misdemeanour, setMisdemeanour } = useContext(FavouritesContext);

  return (
    <div className="misdemeanour-container">
      <GridTitle />

      <GridData misdemeanour={misdemeanour[0]} />
    </div>
  );
}

export default GridContainer;
