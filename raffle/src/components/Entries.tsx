import Entry from "./entries_components/Entry";
interface Props {
  entries: number[];
}

function Entries(props: Props) {
  return (
    <>
      <div className="d-flex flex-row gap-4">
        <div className="d-flex flex-column gap-2 align-content-around flex-wrap">
          {props.entries.map((entry) => (
            <Entry name="Jahasiel Dela Pena" num={entry} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Entries;
