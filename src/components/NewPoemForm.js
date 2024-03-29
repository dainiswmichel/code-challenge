// Filename: NewPoemForm.js
import React, { useState } from 'react';

function NewPoemForm({ addPoem, poemCount }) {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const newPoem = { id: poemCount + 1, title, author, content, read: false };
		addPoem(newPoem);
		setTitle("");
		setAuthor("");
		setContent("");
	};

	return (
		<form onSubmit={handleSubmit} className="new-poem-form">
			<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
			<input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
			<textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
			<input type="submit" value="Create Poem" />
		</form>
	);
}

export default NewPoemForm;