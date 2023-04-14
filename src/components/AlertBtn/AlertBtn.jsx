import "./AlertBtn.css"

const AlertBtn = props => <button className="AlertBtn" onClick={e => alert("A label desse botão é " + (props.label ? props.label : "Nenhuma"))}>Click me!</button>

export default AlertBtn