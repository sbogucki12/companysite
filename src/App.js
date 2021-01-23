import './App.css';
import { useState } from 'react';
import DialogMain from './DialogMain';
import Landing from './Landing';

function App() {
	const [dialog, setDialog] = useState('landing');

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
				<button onClick={(e) => onClickSetDialog(e, props.component)}>{props.label}</button>
			</div>
		);
	};

	const main = (
		<div id="main" onClick={(e) => onClickSetDialog(e, 'main')} style={{ minHeight: '100vh' }}>
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

	let view = main;

	switch (dialog) {
		case 'about':
			view = <DialogMain label={'about'} clickAwaySetDialog={clickAwaySetDialog} />;
			break;
		case 'experience':
			view = <DialogMain label={'experience'} clickAwaySetDialog={clickAwaySetDialog} />;
			break;
		case 'values':
			view = <DialogMain label={'values'} clickAwaySetDialog={clickAwaySetDialog} />;
			break;
		case 'contact':
			view = <DialogMain label={'contact'} clickAwaySetDialog={clickAwaySetDialog} />;
			break;
		case 'main':
			view = main;
			break;
		case 'landing':
			view = <Landing setDialog={setDialog} />;
			break;
		default:
			view = main;
	}

	return <div className="App">{view}</div>;
}

export default App;
