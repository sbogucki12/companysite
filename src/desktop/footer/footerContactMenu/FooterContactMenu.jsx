import './footerContactMenu.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function FooterContactMenu(props) {
	const [contactInfo, setContactInfo] = useState({
		name: '',
		email: '',
	});

	function handleChange(e) {
		setContactInfo({
			...contactInfo,
			[e.target.name]: e.target.value,
		});
	}

	function handleSubmit() {
		localStorage.setItem('name', contactInfo.name);
		localStorage.setItem('email', contactInfo.email);
	}
	return (
		<div id="footerContactMenuContainer">
			<div id="footerContactMenuExitIcon">
				<div onClick={() => props.setShowFooterContactMenu(false)}>X</div>
			</div>
			<div id="footerContactFormContainer">
				<div id="footerContactForm">
					<label htmlFor="fname">Name:</label>
					<input type="text" id="fname" name="name" onChange={(e) => handleChange(e)} />
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" name="email" onChange={(e) => handleChange(e)} />
				</div>
				<div onClick={handleSubmit}>
					<Link to="/contact">
						<button>Submit</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default FooterContactMenu;
