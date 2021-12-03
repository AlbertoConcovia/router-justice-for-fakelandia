import MisdemeanourContainer from "../MisdemeanourContainer";
import generateMisdemeanours from "../generateMisdemeanours";
import React, { useState, useEffect } from "react";

function Misdemeanour() {
  const [misdemeanour, setMisdemeanour] = useState([]);
  const [errorMessage, setErroMessage] = useState(null);

  const newMisdemeanours = async () => {
    try {
      const apiResponse = await generateMisdemeanours(1);
      setMisdemeanour(apiResponse);
      setErroMessage(null);
    } catch (error) {
      switch (error.response.status) {
        case 500:
          setErroMessage(`Oops… something went wrong, try again`);
          break;
        case 418:
          setErroMessage(`I'm a tea pot 🫖, silly`);
          break;
        default:
          setErroMessage(error.message);
          break;
      }
    }
  };

  useEffect(() => {
    newMisdemeanours();
  }, [misdemeanour]);

  return (
    <div>
      <header className="header">
        <h2>Misdemeanour</h2>
      </header>

      <label for="selectMisdemeanour">Filter:</label>
      <select name="selectMisdemeanour" id="selectMisdemeanour">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>

      <MisdemeanourContainer misdemeanour={misdemeanour[0]} />
      <p>{errorMessage}</p>
    </div>
  );
}

export default Misdemeanour;
