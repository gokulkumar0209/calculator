import React, { useState } from "react";

function Calculator() {
	const [input, setInput] = useState("");
	const [outPut, setOutput] = useState("");
	const handleInput = (e) => {
		console.log(input);
		setInput(e.target.value);
	};
	const handleSubmit = () => {};
	return (
		<div>
			<div className=" border border-spacing-2">
				<div>
					<input
						className=" bg-blue-300"
						type="textbox"
						value={input}
						onChange={handleInput}
					></input>
				</div>
				<div>
					<input className="bg-blue-300" type="textbox"></input>
				</div>
			</div>
			<div className="grid grid-cols-5 ">
				<button className=" bg-blue-300 border border-white">^</button>
				<button className=" bg-blue-300 border border-white">(</button>
				<button className=" bg-blue-300 border border-white">)</button>
				<button className=" bg-blue-300 border border-white">√</button>
				<button className=" bg-blue-300 border border-white">x²</button>
			</div>
			<div className="grid grid-cols-5 ">
				<button className=" bg-blue-300 border border-white">AC</button>
				<button className=" bg-blue-300 border border-white">⌫</button>
				<button className=" bg-blue-300 border border-white">log</button>
				<button className=" bg-blue-300 border border-white">÷</button>
				<button className=" bg-blue-300 border border-white">%</button>
			</div>
			<div className="grid grid-cols-5 ">
				<button className=" bg-blue-300 border border-white">7</button>
				<button className=" bg-blue-300 border border-white">8</button>
				<button className=" bg-blue-300 border border-white">9</button>
				<button className=" bg-blue-300 border border-white">X</button>
				<button className=" bg-blue-300 border border-white">x³</button>
			</div>
			<div className="grid grid-cols-5 ">
				<button className=" bg-blue-300 border border-white">4</button>
				<button className=" bg-blue-300 border border-white">5</button>
				<button className=" bg-blue-300 border border-white">6</button>
				<button className=" bg-blue-300 border border-white">-</button>
				<button className=" bg-blue-300 border border-white">
					<sup>3</sup>√
				</button>
			</div>
			<div className="grid grid-cols-5 ">
				<button className=" bg-blue-300 border border-white">1</button>
				<button className=" bg-blue-300 border border-white">2</button>
				<button className=" bg-blue-300 border border-white">3</button>
				<button className=" bg-blue-300 border border-white">+</button>
				<button className=" bg-blue-300 border border-white">!</button>
			</div>
			<div className="grid grid-cols-5 ">
				<button className=" bg-blue-300 border border-white">±</button>
				<button className=" bg-blue-300 border border-white">0</button>
				<button className=" bg-blue-300 border border-white">.</button>

				<button
					className=" bg-blue-300 border border-white col-span-2"
					onClick={handleSubmit}
				>
					=
				</button>
			</div>
		</div>
	);
}

export default Calculator;
