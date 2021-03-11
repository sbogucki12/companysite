import { Link } from 'react-router-dom';
import './contact.css';
import ContactFormMain from './ContactFormMain';
import Layout from '../layout/Layout';
import ContactForm from './ContactForm';

function Contact() {
	return (
		<div>
			<div>
				<Layout
					layout={{
						row0: (
							<div>
								<h2>Row1</h2>
							</div>
						),
						row1: <ContactFormMain />,
						row2: (
							<div>
								<h2>Row2</h2>
							</div>
						),
					}}
				/>
			</div>

			<div id="contactFooter">
				<div>Footer!</div>
				<Link to="/">
					<div>Home</div>
				</Link>
			</div>
		</div>
	);
}

export default Contact;
