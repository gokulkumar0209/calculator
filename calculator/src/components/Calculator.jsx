import React, { useCallback, useEffect, useState } from "react";
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

	const handleInput = useCallback((val) => {
		  console.log(val,input)
			const validKeys = "0123456789+-*/().";
			if (validKeys.includes(val)) {
				const newInput = input+val;
				setInput(prev=>newInput);
			}
		
	},[input]);

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

	const handleKeyDown = (e) => {
		// window.removeEventListener("keydown", handleKeyDown);
		if (e.key == "Enter") {
			handleSubmit();
		} else if (e.key == "Backspace") {
			backSpace();
		} else if (e.key == "Escape") {
			clear();
		} else {
			// console.log(e);

			handleInput(e.key);
		}
	};
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [input]);
	return (
		<div>
			<div className=" border border-spacing-2 rounded-sm">
				<div>
					<input
						className=" bg-blue-300 w-full rounded-sm px-3 py-2 "
						type="text"
						placeholder="Enter value..."
						value={input}
						readOnly
					></input>
				</div>
				<hr/>
				<div>
					<input
						className="bg-blue-300 w-full rounded-sm px-3 py-2"
						type="textbox"
						value={outPut}
						placeholder="result..."
						readOnly
					></input>
				</div>
			</div>
			<div className="grid grid-cols-5 ">
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					value={"^"}
					onClick={handleVariations}
				>
					^
				</button>
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					onClick={()=>handleInput("(")}
				>
					(
				</button>
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					onClick={()=>handleInput(")")}
				>
					)
				</button>
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					value={"^(1/2)"}
					onClick={handleVariations}
				>
					√
				</button>
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					value={"^2"}
					onClick={handleVariations}
				>
					x²
				</button>
			</div>
			<div className="grid grid-cols-5 ">
				<button className=" bg-blue-300 m-1 p-3 rounded-sm" onClick={clear}>
					AC
				</button>
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					onClick={backSpace}
				>
					⌫
				</button>
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					value={"log("}
					onClick={handleVariations}
				>
					log
				</button>
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					value={"/"}
					onClick={handleVariations}
				>
					÷
				</button>
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					onClick={()=>handleInput("%")}
				>
					%
				</button>
			</div>
			<div className="grid grid-cols-5 ">
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					onClick={()=>handleInput("7")}
				>
					7
				</button>
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					onClick={()=>handleInput("8")}
				>
					8
				</button>
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					onClick={()=>handleInput("9")}
				>
					9
				</button>
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					value={"*"}
					onClick={handleVariations}
				>
					X
				</button>
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					value={"x^3"}
					onClick={handleVariations}
				>
					x³
				</button>
			</div>
			<div className="grid grid-cols-5 ">
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					onClick={()=>handleInput("4")}
				>
					4
				</button>
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					onClick={()=>handleInput("5")}
				>
					5
				</button>
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					onClick={()=>handleInput("6")}
				>
					6
				</button>
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					onClick={()=>handleInput("-")}
				>
					-
				</button>
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					value={"^(1/3)"}
					onClick={handleVariations}
				>
					<sup>3</sup>√
				</button>
			</div>
			<div className="grid grid-cols-5 ">
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					onClick={()=>handleInput("1")}
				>
					1
				</button>
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					onClick={()=>handleInput("2")}
				>
					2
				</button>
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					onClick={()=>handleInput("3")}
				>
					3
				</button>
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					onClick={()=>handleInput("+")}
				>
					+
				</button>
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					onClick={()=>handleInput("!")}
				>
					!
				</button>
			</div>
			<div className="grid grid-cols-5 ">
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					onClick={handlePlusMinus}
				>
					±
				</button>
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					onClick={()=>handleInput("0")}
				>
					0
				</button>
				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm"
					onClick={()=>handleInput(".")}
				>
					.
				</button>

				<button
					className=" bg-blue-300 m-1 p-3 rounded-sm col-span-2"
					onClick={handleSubmit}
				>
					=
				</button>
			</div>
		</div>
	);
}

export default Calculator;
