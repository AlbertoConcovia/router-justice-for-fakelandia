import MisdemeanourContainer from "../MisdemeanourContainer";
import generateMisdemeanours from "../generateMisdemeanours";
import React, { useState, useEffect } from "react";

export const MisdemeanoursContext = React.createContext();

function Misdemeanour() {
  const [misdemeanours, setMisdemeanours] = useState([]);
  const [errorMessage, setErroMessage] = useState(null);

  const newMisdemeanours = async () => {
    try {
      const apiResponse = await generateMisdemeanours(5);
      setMisdemeanours(apiResponse);
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
  }, [misdemeanours]);

  return (
    <MisdemeanoursContext.Provider value={{ misdemeanours }}>
      <MisdemeanourContainer />
      <p>{errorMessage}</p>
    </MisdemeanoursContext.Provider>
  );
}

export default Misdemeanour;
