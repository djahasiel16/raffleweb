import "bootstrap/dist/css/bootstrap.css";
// import Sidewindow from "./components/Sidewindow";
import Digits from "./components/Digits";
import Entries from "./components/Entries";
import "./App.css";

function App() {
  return (
    <>
      <div
        id="appContainer"
        className="d-flex flex-row justify-content-center bg-secondary m-3 rounded"
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h3 className="text-white fs-1" id="title">
            THANKS GIVING RAFFLE DRAW
          </h3>
          <div className="p-2">
            <Digits />
          </div>
          <div className="p-2">
            <Entries />
          </div>
          <button className="btn btn-dark text-white px-5 fs-4 m-3 fw-medium">
            START
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
