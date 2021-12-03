import React, { useContext } from 'react';
import { FavouritesContext } from './pages/Misdemeanour';

function MisdemeanourItem() {

const { misdemeanour, setMisdemeanour } = useContext(FavouritesContext);

return (
  <div className="row">
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <div className="box">{misdemeanour[0]?.citizenId}</div>
    </div>
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <div className="box">{misdemeanour[0]?.date}</div>
    </div>
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <div className="box">{misdemeanour[0]?.misdemeanour}</div>
    </div>
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <div className="box">Punishment Idea 1</div>
    </div>
  </div>
);
}

export default MisdemeanourItem;
