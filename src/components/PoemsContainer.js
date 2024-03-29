// PoemsContainer.js
import React from 'react';
import Poem from './Poem';

function PoemsContainer({ poems, onReadClick }) {
	return (
		<div className="poems-container">
			{poems.map(poem => (
				<Poem key={poem.id} poem={poem} onReadClick={onReadClick} />
			))}
		</div>
	);
}

export default PoemsContainer;