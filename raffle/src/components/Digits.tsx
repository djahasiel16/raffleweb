import "./css/Digits.css";
import AnimatedNumber from "./AnimatedNumber";

interface Props {
  num: number;
  duration: number;
}
function Digits(props: Props) {
  const padded = props.num.toString().padStart(4, "0");
  const digits = padded.split("");
  return (
    <>
      <div className="d-flex">
        <div className="digit-box" id="d-1">
          #
        </div>
        <div className="digit-box" id="d-1">
          #
        </div>
        {digits.map((digit) => (
          <div className="digit-box" id="d-1">
            <AnimatedNumber
              targetNumber={parseInt(digit, 10)}
              duration={props.duration}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Digits;
