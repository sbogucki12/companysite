import { Link } from 'react-router-dom';
import './contact.css';
import ContactFormMain from './ContactFormMain';

function Contact() {    
	return (
		<div>
			<div>
				<ContactFormMain />
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
