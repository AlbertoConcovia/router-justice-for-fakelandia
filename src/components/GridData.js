import React from "react";

function GridData({ misdemeanour }) {
  return (
    <div className="row">
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="box">{misdemeanour?.citizenId}</div>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="box">{misdemeanour?.date}</div>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="box">{misdemeanour?.misdemeanour}</div>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="box">
          <img src="https://picsum.photos/100/40" alt="image" />
        </div>
      </div>
    </div>
  );
}

export default GridData;
