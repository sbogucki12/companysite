import { Link } from 'react-router-dom';
import './contact.css';
import ContactFormMain from './ContactFormMain';
import Layout from '../layout/Layout';

function Contact() {
	window.scrollTo(0, 0);

	return (
		<div>
			<div>
				<Layout
					layout={{
						row0: <ContactFormMain />,
						row1: (
							<div>
								<h2>Row2</h2>
							</div>
						),
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
