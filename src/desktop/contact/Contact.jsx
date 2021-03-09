import { Link } from 'react-router-dom';
import './contact.css';
import ContactForm from './ContactForm';

function Contact() {    
	return (
		<div>
			<div>
				<ContactForm />
			</div>
			<div id='contactFooter'>
				<div>Footer!</div>
				<Link to="/">
					<div>Home</div>
				</Link>
			</div>
		</div>
	);
}

export default Contact; 
