import './footerContactMenu.css';

function FooterContactMenu(props) {
	return (
		<div id='footerContactMenuContainer'>
			<div id='footerContactMenuExitIcon'>
                <div onClick={() => props.setShowFooterContactMenu(false)}>X</div>
            </div>
			<div>
                Footer Contact Menu
            </div>
		</div>
	);
}

export default FooterContactMenu;
