import './App.css';
import { useState } from 'react';
import DialogMain from './DialogMain';
import Landing from './Landing';

function App() {
	const [dialog, setDialog] = useState('landing');
	const [showLanding, setShowLanding] = useState(true);

	function onClickSetDialog(e, component) {
		e.stopPropagation();
		setDialog(component);
	}

	function clickAwaySetDialog(e) {
		e.stopPropagation();
		setDialog('main');
		console.log('main');
	}

	const Btn = (props) => {
		return (
			<div>
				<button style={{ whiteSpace: 'nowrap' }} onClick={(e) => onClickSetDialog(e, props.component)}>
					{props.label}
				</button>
			</div>
		);
	};

	function ButtonsMain() {
		return (
			<div>
				<div id="about">
					<Btn component={'about'} label={'Show About'} />
				</div>
				<div id="experience">
					<Btn component={'experience'} label={'Show Experience'} />
				</div>
				<div id="values">
					<Btn component={'values'} label={'Show Values'} />
				</div>
				<div id="contact">
					<Btn component={'contact'} label={'Show Contact'} />
				</div>
			</div>
		);
	}

	let dialogView = null;

	switch (dialog) {
		case 'about':
			dialogView = <DialogMain label={'about'} clickAwaySetDialog={clickAwaySetDialog} />;
			break;
		case 'experience':
			dialogView = <DialogMain label={'experience'} clickAwaySetDialog={clickAwaySetDialog} />;
			break;
		case 'values':
			dialogView = <DialogMain label={'values'} clickAwaySetDialog={clickAwaySetDialog} />;
			break;
		case 'contact':
			dialogView = <DialogMain label={'contact'} clickAwaySetDialog={clickAwaySetDialog} />;
			break;
		case 'main':
			dialogView = null;
			break;
		case 'landing':
			dialogView = null;
			//<Landing setDialog={setDialog} />;
			break;
		default:
			dialogView = null;
	}

	let main = <Landing setDialog={setDialog} setShowLanding={setShowLanding}/>

	if(!showLanding){
		main = (
			<div id="main" onClick={(e) => onClickSetDialog(e, 'main')} style={{ minHeight: '100vh' }}>
				<div id="mainBox">
					<ButtonsMain />
					{dialogView}
				</div>
				<div id="homeButtonContainer">
					<button onClick={() => setShowLanding(true)}>
						Home
					</button>
				</div>
			</div>
		);
	}

	let view = main;

	return <div className="App">{view}</div>;
}

export default App;
