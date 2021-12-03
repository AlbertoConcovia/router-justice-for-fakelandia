import GridContainer from "./GridContainer";

const MisdemeanourContainer = () => (
    <div>
      <header className="header">
        <h2>Misdemeanour</h2>
      </header>

      <label for="selectMisdemeanour">Filter:</label>
      <select name="selectMisdemeanour" id="selectMisdemeanour">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>

      <GridContainer />

    </div>

  );

export default MisdemeanourContainer;
