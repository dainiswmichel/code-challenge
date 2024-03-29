// App.js
import React, { useState, useEffect } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
	const [poems, setPoems] = useState([]);
	const [showForm, setShowForm] = useState(true);

	useEffect(() => {
		fetch('http://localhost:6001/poems')
			.then(response => response.json())
			.then(data => setPoems(data))
			.catch(error => console.error('Error fetching poems:', error));
	}, []);
	

	const addPoem = (newPoem) => {
		setPoems([...poems, newPoem]);
	};

	return (
		<div className="app">
			<div className="sidebar">
				<button onClick={() => setShowForm(!showForm)}>Show/hide new poem form</button>
				{showForm ? <NewPoemForm addPoem={addPoem} /> : null}
				<PoemsContainer poems={poems} />
			</div>
		</div>
	);
}

export default App;