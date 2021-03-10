import './contact.css';
import ContactForm from './ContactForm';
import { useState } from 'react';
import ContactConfirmation from './ContactConfirmation';

function ContactFormMain() {
	const [showForm, setShowForm] = useState(true);
	return (
		<div id="contactFormContainer">
			<div id="contactFormBox">
				{showForm ? <ContactForm setShowForm={setShowForm} /> : <ContactConfirmation />}
			</div>
		</div>
	);
}

export default ContactFormMain;
