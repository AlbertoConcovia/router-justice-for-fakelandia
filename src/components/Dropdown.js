const Dropdown = () => (
  <div className="dropdown">
    <label htmlFor="selectMisdemeanour">Filter:</label>
    <select name="selectMisdemeanour" id="selectMisdemeanour">
      <option value="iJustWantToTalk">I just want to talk</option>
      <option value="mildPublicRudeness">Mild Public Rudeness</option>
      <option value="speakingInALift">Speaking in a Lift</option>
      <option value="notEatingYourVegetables">Not Eating Your Vegetables</option>
      <option value="supportingManchesterUnited">Supporting Manchester United</option>
    </select>
  </div>
);

export default Dropdown;
