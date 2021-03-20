import OurCompanyView from './OurCompanyView';
import './ourCompany.css';
import { useState } from 'react';

function OurCompany() {
	const [showOurCompany, setShowOurCompany] = useState(false);

	return (
		<div>
			{showOurCompany ? (
				<div>
					<OurCompanyView setShowOurCompany={setShowOurCompany}/>
				</div>
			) : (
				<div>
					<button onClick={() => setShowOurCompany(true)}>Our Company</button>
				</div>
			)}
		</div>
	);
}

export default OurCompany;
