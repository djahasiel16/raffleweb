import Entry from "./entries_components/Entry";
function Entries() {
  return (
    <>
      <div className="d-flex flex-row gap-4">
        <div className="d-flex flex-column gap-2">
          <Entry name="Jahasiel Dela Pena" num={"0001"} />
          <Entry name="John Paul Sayson" num={"0002"} />
          <Entry name="Jake Loquinte" num={"0003"} />
          <Entry name="Edwin Busano Jr." num={"0004"} />
        </div>
        <div className="d-flex flex-column gap-2">
          <Entry name="Winna Mae Busano" num={"0005"} />
          <Entry name="Edmalyn Busano" num={"0006"} />
          <Entry name="Kimberly Busano" num={"0007"} />
          <Entry name="Rovie Rodriguez" num={"0008"} />
        </div>
      </div>
    </>
  );
}

export default Entries;
