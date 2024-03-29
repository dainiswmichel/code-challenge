// PoemsContainer.js
import React from "react";
import Poem from "./Poem";

function PoemsContainer({ poems }) {
	console.log("PoemsContainer received poems:", poems); // Log received poems for debugging
	return (
		<div className="poems-container">
			{poems.map((poem, index) => (
				<Poem key={index} poem={poem} />
			))}
		</div>
	);
}

export default PoemsContainer;