import "./App.css";
import UppercaseColoredP from "./components/UppercaseColoredP/UppercaseColoredP";
import AlertBtn from "./components/AlertBtn/AlertBtn";

function App() {
	return (
		<>
			<UppercaseColoredP color="red" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium magni modi sit ab id, cum dolorum aut quo commodi non autem maiores placeat sed expedita dignissimos? Voluptatum, minus magnam!" />
			<UppercaseColoredP color="#3333ff" text="am i blue?" />
			<UppercaseColoredP text="default color" />
			<hr />
			<AlertBtn label="Baixar CV" />
			<AlertBtn label="Outro" />
			<AlertBtn />
		</>
	);
}

export default App;
