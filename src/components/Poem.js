// Poem.js
import React from "react";

function Poem({ poem }) {
	console.log("Poem component received poem:", poem); // Log received poem for debugging
	return (
		<div>
			<h3>{poem.title}</h3>
			<p>{poem.content}</p>
			<p>
				<strong>- {poem.author}</strong>
			</p>
			<button>Mark as read</button>
		</div>
	);
}

export default Poem;