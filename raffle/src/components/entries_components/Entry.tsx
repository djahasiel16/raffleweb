import "../css/Entry.css";
import "bootstrap-icons/font/bootstrap-icons.css";

interface Props {
  name: string;
  num: number;
}
function Entry(props: Props) {
  return (
    <>
      <div className="box-entry">
        <span className="icon-holder spacer">
          #{props.num} &nbsp;
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
