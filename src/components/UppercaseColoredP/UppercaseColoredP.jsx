const UppercaseColoredP = ({ color, text, ...props }) => <p className="UppercaseColoredP" style={{ color }}>{text.toUpperCase()}</p>;
export default UppercaseColoredP