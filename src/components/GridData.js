function GridData({misdemeanour}) {

  return (
    <div className="row">
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="box">{misdemeanour?.citizenId}</div>
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="box">{misdemeanour?.date}</div>
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="box">{misdemeanour?.misdemeanour}</div>
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="box">
          <img src="https://picsum.photos/100/40" />
        </div>
      </div>
    </div>
  );
}

export default GridData;
