import "bootstrap/dist/css/bootstrap.css";
import Digits from "./components/Digits";
import Scroll from "./components/Scroll";
import CSV from "./components/CSV";

import "./App.css";
import { useState } from "react";

function getRandomInt(min: number, max: number): number {
  const mn = Math.ceil(min); // Round up the minimum
  const mx = Math.floor(max); // Round down the maximum
  return Math.floor(Math.random() * (mx - mn + 1)) + mn;
}

function App() {
  const [winningNumber, setWinningNumber] = useState(0);
  const [winners, setWinners] = useState<number[]>([]);
  const names = {
    100:'Jahasiel',
    234:'James'
  }
  return (
    <>
      <div className="d-flex flex-row justify-content-center bg-secondary mx-3 mt-3 p-2 rounded container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h3 className="text-white fs-1" id="title">
            THANKS GIVING RAFFLE DRAW
          </h3>
          
          <div className="p-2 d-flex">
            <Digits num={winningNumber} />
            <button
            className="btn btn-dark text-white px-4 fs-4 m-1 fw-medium shadow"
            onClick={() => {
              setWinningNumber(getRandomInt(1, 500));
              winningNumber
                ? setWinners((winners) => [winningNumber,...winners])
                : false;
            }}
          >
            START
          </button>
          </div>
          <div className="p-2">
            <Scroll names={names} entries={winners} />
          </div>
        </div>
      </div>
      <CSV />
    </>
  );
}

export default App;
