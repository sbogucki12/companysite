import './ourCompany.css';

function OurCompanyView(props) {
	return (
		<div id='ourCompanyViewContainer'>
            <div />
			<div className='ourCompanyViewColumnContainer ourCompanyButtonAnimmation'>
				<button onClick={() => props.setShowOurCompany(false)} className="ourCompanyButton">About Us</button>
			</div>
			<div className='ourCompanyViewColumnContainer ourCompanyAnimation0'>{`--->`}</div>
			<div className='ourCompanyViewColumnContainer ourCompanyAnimation1'>
				<div id='ourCompanyContentContainer'>
				{' '}
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus dapibus ornare. Vestibulum
					condimentum mi tellus, ut ultricies nibh tristique eget. Proin sodales, tellus porta fringilla
					rhoncus, tellus magna rutrum lacus, at tempus nisl tellus ut quam. In hac habitasse platea dictumst.
					Mauris lacus lorem, rutrum eget ipsum eget, scelerisque molestie dui. Phasellus id elementum nibh.
					Curabitur ornare nunc quis congue volutpat.{' '}
				</p>
				</div>
				
			</div>
            <div />
		</div>
	);
}

export default OurCompanyView; 
