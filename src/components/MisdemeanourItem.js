const MisdemeanourItem = ({ misdemeanourItem }) => (
  <div className="row">
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <div className="box">{misdemeanourItem?.citizenId}</div>
    </div>
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <div className="box">{misdemeanourItem?.date}</div>
    </div>
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <div className="box">{misdemeanourItem?.misdemeanour}</div>
    </div>
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <div className="box">Punishment Idea 1</div>
    </div>
  </div>
);

export default MisdemeanourItem;
