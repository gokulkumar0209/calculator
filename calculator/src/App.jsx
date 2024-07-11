import { useState } from "react";
import Calculator from "./components/Calculator";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="flex justify-center items-center h-screen">
				<div className=" bg-gray-500 p-4 rounded-lg">
					<Calculator />
				</div>
			</div>
		</>
	);
}

export default App;
