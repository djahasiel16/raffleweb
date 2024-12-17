import "bootstrap/dist/css/bootstrap.css";
// import Sidewindow from "./components/Sidewindow";
import Digits from "./components/Digits";
import Scroll from "./components/Scroll";
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
  return (
    <>
      <div className="d-flex flex-row justify-content-center bg-secondary mx-3 mt-3 p-2 rounded container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h3 className="text-white fs-1" id="title">
            THANKS GIVING RAFFLE DRAW
          </h3>
          <button
            className="btn btn-dark text-white px-5 fs-4 m-3 fw-medium"
            onClick={() => {
              setWinningNumber(getRandomInt(1, 500));
              winningNumber
                ? setWinners((winners) => [...winners, winningNumber])
                : false;
            }}
          >
            START
          </button>
          <div className="p-2">
            <Digits num={winningNumber} />
          </div>
          <div className="p-2">
            <Scroll entries={winners} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
