import React, { useState } from "react";
import { evaluate } from "mathjs";

function Calculator() {
	const [input, setInput] = useState("");
	const [outPut, setOutput] = useState("");

	const clear = () => {
		setInput("");
		setOutput("");
	};

	const backSpace = () => {
		if (input != "") {
			let newInput = "";
			for (let i = 0; i < input.length - 1; i++) {
				newInput = newInput.concat(input[i]);
			}
			console.log(newInput);
			setInput(newInput);
		}
	};

	const handleInput = (e) => {
		const newInput = input.concat(e.target.innerText);
		console.log(newInput);
		setInput(newInput);
	};

	const handleVariations = (e) => {
		const symbol = e.target.value;
		const newInput = input.concat(symbol);
		setInput(newInput);
	};
	const handlePlusMinus = () => {
		if (input == "") {
			setInput("-");
		} else if (input[0] == "-") {
			const newInput = "+".concat(input.slice(1, input.length));
			setInput(newInput);
		} else if (input[0] == "+") {
			const newInput = "-".concat(input.slice(1));
			setInput(newInput);
		} else {
			const newInput = "-".concat(input);
			setInput(newInput);
		}
	};
	const handleSubmit = () => {
		try {
			const answer = evaluate(input);
			setOutput(answer);
		} catch (error) {
			console.log("error " + error);
		}
	};
	return (
		<div>
			<div className=" border border-spacing-2">
				<div>
					<input
						className=" bg-blue-300"
						type="textbox"
						value={input}
						onChange={handleInput}
						contentEditable
					></input>
				</div>
				<div>
					<input
						className="bg-blue-300"
						type="textbox"
						value={outPut}
						readOnly
					></input>
				</div>
			</div>
			<div className="grid grid-cols-5 ">
				<button
					className=" bg-blue-300 border border-white"
					value={"^"}
					onClick={handleVariations}
				>
					^
				</button>
				<button
					className=" bg-blue-300 border border-white"
					onClick={handleInput}
				>
					(
				</button>
				<button
					className=" bg-blue-300 border border-white"
					onClick={handleInput}
				>
					)
				</button>
				<button
					className=" bg-blue-300 border border-white"
					value={"^(1/2)"}
					onClick={handleVariations}
				>
					√
				</button>
				<button
					className=" bg-blue-300 border border-white"
					value={"^2"}
					onClick={handleVariations}
				>
					x²
				</button>
			</div>
			<div className="grid grid-cols-5 ">
				<button className=" bg-blue-300 border border-white" onClick={clear}>
					AC
				</button>
				<button
					className=" bg-blue-300 border border-white"
					onClick={backSpace}
				>
					⌫
				</button>
				<button className=" bg-blue-300 border border-white">log</button>
				<button
					className=" bg-blue-300 border border-white"
					value={"/"}
					onClick={handleVariations}
				>
					÷
				</button>
				<button
					className=" bg-blue-300 border border-white"
					onClick={handleInput}
				>
					%
				</button>
			</div>
			<div className="grid grid-cols-5 ">
				<button
					className=" bg-blue-300 border border-white"
					onClick={handleInput}
				>
					7
				</button>
				<button
					className=" bg-blue-300 border border-white"
					onClick={handleInput}
				>
					8
				</button>
				<button
					className=" bg-blue-300 border border-white"
					onClick={handleInput}
				>
					9
				</button>
				<button
					className=" bg-blue-300 border border-white"
					value={"*"}
					onClick={handleVariations}
				>
					X
				</button>
				<button
					className=" bg-blue-300 border border-white"
					value={"x^3"}
					onClick={handleVariations}
				>
					x³
				</button>
			</div>
			<div className="grid grid-cols-5 ">
				<button
					className=" bg-blue-300 border border-white"
					onClick={handleInput}
				>
					4
				</button>
				<button
					className=" bg-blue-300 border border-white"
					onClick={handleInput}
				>
					5
				</button>
				<button
					className=" bg-blue-300 border border-white"
					onClick={handleInput}
				>
					6
				</button>
				<button
					className=" bg-blue-300 border border-white"
					onClick={handleInput}
				>
					-
				</button>
				<button
					className=" bg-blue-300 border border-white"
					value={"^(1/3)"}
					onClick={handleVariations}
				>
					<sup>3</sup>√
				</button>
			</div>
			<div className="grid grid-cols-5 ">
				<button
					className=" bg-blue-300 border border-white"
					onClick={handleInput}
				>
					1
				</button>
				<button
					className=" bg-blue-300 border border-white"
					onClick={handleInput}
				>
					2
				</button>
				<button
					className=" bg-blue-300 border border-white"
					onClick={handleInput}
				>
					3
				</button>
				<button
					className=" bg-blue-300 border border-white"
					onClick={handleInput}
				>
					+
				</button>
				<button
					className=" bg-blue-300 border border-white"
					onClick={handleInput}
				>
					!
				</button>
			</div>
			<div className="grid grid-cols-5 ">
				<button
					className=" bg-blue-300 border border-white"
					onClick={handlePlusMinus}
				>
					±
				</button>
				<button
					className=" bg-blue-300 border border-white"
					onClick={handleInput}
				>
					0
				</button>
				<button
					className=" bg-blue-300 border border-white"
					onClick={handleInput}
				>
					.
				</button>

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
