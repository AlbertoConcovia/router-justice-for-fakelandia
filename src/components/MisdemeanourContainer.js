const MisdemeanourContainer = ({misdemeanour}) => (

  <div className="misdemeanour-container">

    <div className="row">
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="box"></div>
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        {" "}
        <div className="box"></div>
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="box">
          <label for="selectMisdemeanour">Filter:</label>
          <select name="selectMisdemeanour" id="selectMisdemeanour">
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        {" "}
        <div className="box"></div>{" "}
      </div>
    </div>

    <div className="row">
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="box">Citizen ID</div>
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="box">Date</div>
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="box">Misdemeanour</div>
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="box">Punishment Idea</div>
      </div>
    </div>

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
        <div className="box">Punishment Idea 1</div>
      </div>
    </div>
    
  </div>
);

export default MisdemeanourContainer;
