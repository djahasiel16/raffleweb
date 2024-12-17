import "../css/Entry.css";
import "bootstrap-icons/font/bootstrap-icons.css";

interface Props {
  name: string;
  num: number;
}
function Entry(props: Props) {
  let padded = props.num.toString().padStart(4, "0");
  return (
    <>
      <div className="box-entry mt-1">
        <span className="icon-holder spacer">
          #{padded} &nbsp;
          <i className="bi bi-ticket-perforated-fill fs-1"></i>
          &nbsp;
        </span>
        <span className="spacer" id="name">
          {props.name}
        </span>
      </div>
    </>
  );
}

export default Entry;
