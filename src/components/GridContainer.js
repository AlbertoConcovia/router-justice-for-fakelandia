import GridData from "./GridData";
import GridTitle from "./GridTitle";
import React, { useContext } from "react";
import { MisdemeanoursContext } from "./pages/Misdemeanour";

function GridContainer() {
  const { misdemeanours } = useContext(MisdemeanoursContext);

  const buildRows = () => {
    let rows = [];
    misdemeanours.forEach((misdemeanour) => {
      rows.push(<GridData misdemeanour={misdemeanour} />);
    });
    return rows;
  };

  return (
    <div className="grid-container">
      <GridTitle />
      {buildRows()}
    </div>
  );
}

export default GridContainer;
