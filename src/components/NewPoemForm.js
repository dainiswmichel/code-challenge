// NewPoemForm.js
import React, { useState } from "react";

function NewPoemForm({ addPoem }) {
	const initialForm = {
		title: "",
		author: "",
		content: "",
	};

	const [form, setForm] = useState(initialForm);

	const handleChange = (event) => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		addPoem(form);
		setForm(initialForm);
	};

	return (
		<form className="new-poem-form" onSubmit={handleSubmit}>
			<input
				placeholder="Title"
				name="title"
				value={form.title}
				onChange={handleChange}
			/>
			<input
				placeholder="Author"
				name="author"
				value={form.author}
				onChange={handleChange}
			/>
			<textarea
				name="content"
				value={form.content}
				onChange={handleChange}
				placeholder="Write your masterpiece here..."
				rows={10}
			/>
			<input type="submit" value="Share your masterpiece" />
		</form>
	);
}

export default NewPoemForm;