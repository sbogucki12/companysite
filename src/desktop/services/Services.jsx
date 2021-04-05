import './services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import servicesList from './servicesList';
import { useState } from 'react';

function Services(props) {
	const [counter, setCounter] = useState(0);
	const [listOfServices, setListOfServices] = useState(servicesList[counter].summary);

	function handleArrowOnClick(direction, number) {
		if (direction === 'left') {
			if (number === 0) {
				setCounter(servicesList.length - 1);
				setListOfServices(servicesList[servicesList.length - 1].summary);
				return;
			} else {
				setCounter(number - 1);
				setListOfServices(servicesList[number - 1].summary);
			}
		}

		if (direction === 'right') {
			if (number >= servicesList.length - 1) {
				setCounter(0);
				setListOfServices(servicesList[0].summary);
				return;
			} else {
				setCounter(number + 1);
				setListOfServices(servicesList[number + 1].summary);
			}
		}
	}

	return (
		<div id="servicesContainer">
			<div id="servicesContentContainer">
				<div>
					<FontAwesomeIcon
						icon={faChevronCircleLeft}
						className="servicesArrow"
						onClick={() => handleArrowOnClick('left', counter)}
					/>
				</div>
				<div id="servicesContentCard">
					<div>
						<h1>
							<FontAwesomeIcon icon={servicesList[counter].icon} />
						</h1>
					</div>
					<div>
						<h2>{servicesList[counter].name}</h2>
					</div>
					<div>
						<ul>
							{listOfServices.map((item) => {
								return <li>{item}</li>;
							})}
						</ul>
					</div>
				</div>
				<div>
					<FontAwesomeIcon
						icon={faChevronCircleRight}
						className="servicesArrow"
						onClick={() => handleArrowOnClick('right', counter)}
					/>
				</div>
			</div>
			<div id="servicesExitButtonContainer">
				<button onClick={() => props.setSliderClassName('closed')}>Close</button>
			</div>
		</div>
	);
}

export default Services;
