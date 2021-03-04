import './footerMain.css';
import FooterContactMenu from './footerContactMenu/FooterContactMenu';
import {useState} from 'react';

let footerContactMenu = null; 

function FooterMain() {
    const [showFooterContactMenu, setShowFooterContactMenu] = useState(true);
    
    return (
        <div id='footerMainContainer'> 
            <div>
                Footer!
            </div>
            <div id='footerContactMenu'>
                <div>
                    { showFooterContactMenu ? <FooterContactMenu setShowFooterContactMenu={setShowFooterContactMenu}  /> : footerContactMenu }
                </div>
            </div>
            {showFooterContactMenu ? null :
            <div id='footerShowContactMenuButton'>
                <div onClick={() => setShowFooterContactMenu(true)}>
                    Contact
                </div>
            </div>}
        </div>
    )
}

export default FooterMain;
