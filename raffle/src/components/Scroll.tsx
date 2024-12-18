import Entry from "./entries_components/Entry";
import "../App.css";

interface Props {
  entries: number[];
  names: { [key: number]: string };
}

function Scroll(props: Props) {
  return (
    <>
      {props.entries.length > 0 ? (
        <h2 className="text-white text-center">RAFFLE DRAW WINNERS</h2>
      ) : (
        false
      )}
      <div id="scroll">
        <div>
          <div>
            {props.entries.map((entry: number, index) => (
              <Entry
                key={entry}
                name={props.names[entry] ? props.names[entry] : "Not Sold"}
                num={entry}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Scroll;
