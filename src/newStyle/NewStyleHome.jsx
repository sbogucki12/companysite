import React, {useState} from 'react';
import '../app.css';

let footer = null;


function NewStyleHome() {
	const [showFooter, setShowFooter] = useState(false);

	window.onscroll = function(e){
		if(this.oldScroll > this.scrollY){
			setShowFooter(true);
		}
	}

	if(showFooter){
		footer = <h1>footer</h1>
	}
	return (
		<div>
			<header id="mainHeader">
				<h1>header</h1>
			</header>

			<h1>Home</h1>
			<footer>{footer}</footer>
		</div>
	);
}

export default NewStyleHome;
