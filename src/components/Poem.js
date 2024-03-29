// Filename: Poem.js
import React, { useState } from 'react';

function Poem({ poem }) {
	const [read, setRead] = useState(poem.read);

	const handleReadClick = () => {
		// Update the read status on the server
		fetch(`http://localhost:6001/poems/${poem.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ ...poem, read: !read }),
		})
			.then(response => response.json())
			.then(data => setRead(data.read))
			.catch(error => console.error('Error updating read status:', error));
	};

	return (
		<div className="poem">
			<h2>{poem.title}</h2>
			<p>{poem.content}</p>
			<button onClick={handleReadClick}>{read ? 'Mark as unread' : 'Mark as read'}</button>
		</div>
	);
}

export default Poem;