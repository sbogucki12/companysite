import './ourCompany.css';
import { useState, Fragment } from 'react';

function OurCompany() {
	const [showButton, setShowButton] = useState(false);
	const [showBio, setShowBio] = useState(false);
	const [showArrow, setShowArrow] = useState(false);

	function handleOnClickShowBio() {
		setShowButton(!showButton);
		setShowArrow(!showArrow);
		setShowBio(!showBio);
	}

	function ButtonNoBio() {
		return (
			<div id="ourCompanyButtonNoBioContainer">
				<button onClick={() => handleOnClickShowBio()}>Our Company</button>
			</div>
		);
	}

	function ButtonWithBio() {
		return (
			<div id="ourCompanyContainer">
				<div />
				{showButton ? (
					<div>
						<button onClick={() => handleOnClickShowBio()}>Our Company</button>
					</div>
				) : null}

				{showArrow ? <div id="ourCompanyArrowContainer">&#8680;</div> : null}
				{showBio ? (
					<Fragment>
						<div id="ourCompanyBioContainer">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus dapibus ornare.
								Vestibulum condimentum mi tellus, ut ultricies nibh tristique eget. Proin sodales,
								tellus porta fringilla rhoncus, tellus magna rutrum lacus, at tempus nisl tellus ut
								quam. In hac habitasse platea dictumst. Mauris lacus lorem, rutrum eget ipsum eget,
								scelerisque molestie dui. Phasellus id elementum nibh. Curabitur ornare nunc quis congue
								volutpat.{' '}
							</p>
						</div>
					</Fragment>
				) : null}

				<div />
			</div>
		);
	}

	return <div>{!showBio && !showArrow ? <ButtonNoBio /> : <ButtonWithBio />}</div>;
}

export default OurCompany;
