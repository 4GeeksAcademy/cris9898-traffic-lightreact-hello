import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [color, setColor] = useState("red");
  const [newLight, setNewLight] = useState(false);

  const handleButtonClick = () => {
    setNewLight(!newLight);
  };
  const colors = ["red", "yellow", "green"];

  const toggleColor = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };


  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <button onClick={handleButtonClick} className="btn btn-primary">
          Crear otra luz
        </button>
        
        <button onClick={toggleColor} className="btn btn-primary ms-2">Cambiar color del semáforo</button>
      
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="lightContainer">
          <div
            onClick={() => setColor("red")}
            className={color == "red" ? "red light" : "red light opacity-50"}
          ></div>
          <div
            onClick={() => setColor("yellow")}
            className={
              color == "yellow" ? "yellow light" : "yellow light opacity-50"
            }
          ></div>
          <div
            onClick={() => setColor("green")}
            className={
              color == "green" ? "green light" : "green light opacity-50"
            }
          ></div>
          {newLight && (
            <div>
              <div
                onClick={() => setColor("orange")}
                className={
                  color === "orange"
                    ? "orange light"
                    : "orange light opacity-50"
                }
              ></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
