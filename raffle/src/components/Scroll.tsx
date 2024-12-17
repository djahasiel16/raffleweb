import Entry from "./entries_components/Entry";
import "../App.css";

interface Props {
  entries: number[];
}

function Scroll(props: Props) {
  return (
    <>
      {props.entries.length > 0 ? (
        <h2 className="text-white text-center">RAFFLE DRAW WINNERS</h2>
      ) : (
        false
      )}
      <div className="row" id="scroll">
        <div className="col">
          <div>
            {props.entries.map((entry) => (
              <Entry name="" num={entry} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Scroll;
