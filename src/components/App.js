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
		fetch('http://localhost:6001/poems', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newPoem),
		})
		.then(response => response.json())
		.then(data => setPoems([...poems, data]))
		.catch(error => console.error('Error:', error));
	};

	const handleReadClick = (id) => {
		const updatedPoem = poems.find(poem => poem.id === id);
		updatedPoem.read = !updatedPoem.read;

		fetch(`http://localhost:6001/poems/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ read: updatedPoem.read }),
		})
		.then(response => response.json())
		.then(data => {
			const updatedPoems = poems.map(poem => 
				poem.id === id ? data : poem
			);
			setPoems(updatedPoems);
		})
		.catch(error => console.error('Error:', error));
	};

	return (
		<div className="app">
			<div className="sidebar">
				<button onClick={() => setShowForm(!showForm)}>Show/hide new poem form</button>
				{showForm ? <NewPoemForm addPoem={addPoem} poemCount={poems.length} /> : null}
			</div>
			<div className="poems-sidebar">
				<PoemsContainer poems={poems} onReadClick={handleReadClick} />
			</div>
		</div>
	);
}

export default App;