import "../css/Entry.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";
import { useState } from "react";

interface Props {
  name: string;
  num: number;
}
function Entry(props: Props) {
  let padded = props.num.toString().padStart(4, "0");
  const [blur, setBlur] = useState(10);
  
  useEffect(() => {
      const interval = setInterval(() => {
        setBlur((prev) => Math.max(prev - 1, 0));
      }, 1000);
  
      const timeout = setTimeout(() => {
        clearInterval(interval);
      }, 10 * 1000);
  
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }, []);

  return (
    <>
      <div className="box-entry mt-1">
        <span className="icon-holder spacer">
          #{padded} &nbsp;
          <i className="bi bi-ticket-perforated-fill fs-1"></i>
          &nbsp;
        </span>
        <span className="spacer" id="name" style={{filter:`blur(${blur}px)`, transition:"filter 1s ease-out",}}>
          {props.name}
        </span>
      </div>
    </>
  );
}

export default Entry;
