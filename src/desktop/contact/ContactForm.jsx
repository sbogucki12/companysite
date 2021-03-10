import './contact.css';
import { useState } from 'react';

function ContactForm(props) {
	const [contactFormData, setContactFromData] = useState({
		name: localStorage.getItem('name'),
		email: localStorage.getItem('email'),
		message: '',
	});

	function handleChange(e) {
		setContactFromData({
			message: e.target.value,
		});
	}
	return (
		<div id="contactForm">
			<label htmlFor="name">Name:</label>
			<input type="text" id="name" name="name" value={contactFormData.name} />
			<label htmlFor="email">Email:</label>
			<input type="email" id="email" name="email" value={contactFormData.email} />
			<label htmlFor="message">Message:</label>
			<input
				type="message"
				id="message"
				name="message"
				value={contactFormData.message}
				onChange={(e) => handleChange(e)}
			/>
			<div>
				<button onClick={() => props.setShowForm(false)}>Send</button>
			</div>
		</div>
	);
}

export default ContactForm;
